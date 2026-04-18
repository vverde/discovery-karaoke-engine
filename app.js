// Discovery Karaoke Prevention Engine — app.js v2.0
// Depends on: data.js (DATA global)

'use strict';

// ---------------------------------------------------------------------------
// State
// ---------------------------------------------------------------------------
const state = {
  tab: 'home',
  risk: null,          // 'V'|'U'|'F'|'Vi'|'C'|null
  stage: null,         // 'E'|'Va'|'O'|null
  cat: null,           // compact cat key | null
  search: '',
  filters: {
    euOff: false,      // hide methods needing existing users
    ltOff: false,      // hide methods needing live traffic
    showTools: false,  // include context tools in Find grid
    tn: null,          // time filter: 'fast'|'short'|'med'|'long'|null
    eff: null,         // effort filter: 'low'|'lm'|'med'|'mh'|'high'|null
  },
  refSort: 'id',
  refCat: '',
  diagScores: {},      // { q_index: score }
  diagDone: false,
  activeMethod: null,  // id string
  drawerOpen: false,
  wizard: { open: false, step: 0, answers: {} },
  matrixExpandedRisk: null,
};

// ---------------------------------------------------------------------------
// URL / Hash routing
// ---------------------------------------------------------------------------

/**
 * Parse the current location.hash into { tab, risk, stage, cat, method }.
 * Formats:
 *   #home | #find | #diagnose | #reference | #about
 *   #find?risk=V&stage=E&cat=gen
 *   #method=M23
 */
function parseHash() {
  const raw = window.location.hash.slice(1); // strip leading '#'
  if (!raw) return { tab: 'home' };

  // method shortcut — no tab prefix needed
  if (raw.startsWith('method=')) {
    return { tab: null, method: raw.slice('method='.length) };
  }

  const qIdx = raw.indexOf('?');
  const tab  = qIdx >= 0 ? raw.slice(0, qIdx) : raw;
  const params = qIdx >= 0 ? new URLSearchParams(raw.slice(qIdx + 1)) : null;

  return {
    tab:    tab || 'home',
    risk:   params?.get('risk')  || null,
    stage:  params?.get('stage') || null,
    cat:    params?.get('cat')   || null,
    method: params?.get('method')|| null,
  };
}

/**
 * Serialise current state to a hash string and push/replace into history.
 * replace=true for filter changes (avoid polluting back stack); false for tab/drawer.
 */
function pushHash(replace = false) {
  let hash;

  if (state.drawerOpen && state.activeMethod) {
    hash = `method=${state.activeMethod}`;
  } else {
    const tab    = state.tab || 'home';
    const params = new URLSearchParams();
    if (state.risk)  params.set('risk',  state.risk);
    if (state.stage) params.set('stage', state.stage);
    if (state.cat)   params.set('cat',   state.cat);
    const qs = params.toString();
    hash = qs ? `${tab}?${qs}` : tab;
  }

  const url = `${window.location.pathname}#${hash}`;
  if (replace) {
    history.replaceState(null, '', url);
  } else {
    history.pushState(null, '', url);
  }
}

/** Apply a parsed hash object to app state + DOM without pushing a new entry. */
function applyHash(parsed) {
  if (parsed.method) {
    // Ensure the right tab is active before opening the drawer
    if (!['find','reference'].includes(state.tab)) {
      _switchTabSilent('find');
    }
    openDrawerSilent(parsed.method);
    return;
  }

  const validTabs = ['home', 'find', 'diagnose', 'reference', 'about'];
  const tab = validTabs.includes(parsed.tab) ? parsed.tab : 'home';

  // Apply filter state before switching tab so renderFind() sees them
  state.risk  = parsed.risk  || null;
  state.stage = parsed.stage || null;
  state.cat   = parsed.cat   || null;

  _switchTabSilent(tab);
  if (tab === 'find') syncFindUI();
}

/** switchTab without pushing to history — used by applyHash. */
function _switchTabSilent(name) {
  state.tab = name;
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));
  const el = document.getElementById(`tab-${name}`);
  if (el) el.classList.add('active');
  const btn = document.querySelector(`.nav-btn[data-tab="${name}"]`);
  if (btn) btn.classList.add('active');
  if (name === 'find')      renderFind();
  if (name === 'reference') renderRef();
}

// ---------------------------------------------------------------------------
// Boot
// ---------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  buildHome();
  buildFindFilters();
  buildDiag();
  buildRefHeader();
  renderFind();
  renderRef();

  // Apply hash first, then fall back to home
  const parsed = parseHash();
  if (parsed.tab || parsed.method) {
    applyHash(parsed);
  } else {
    _switchTabSilent('home');
  }

  setupDrawer();

  // Back / forward navigation
  window.addEventListener('hashchange', () => {
    const p = parseHash();
    // If drawer is open and hash no longer points to a method, close it
    if (state.drawerOpen && !p.method) closeDrawerSilent();
    applyHash(p);
  });
});

// ---------------------------------------------------------------------------
// Tab navigation
// ---------------------------------------------------------------------------
function switchTab(name) {
  _switchTabSilent(name);
  pushHash(false);
}

// ---------------------------------------------------------------------------
// HOME
// ---------------------------------------------------------------------------
function buildHome() {
  buildRiskCards();
  buildHomeMatrix();
}

function buildRiskCards() {
  const container = document.getElementById('home-risks');
  if (!container) return;
  const risks = DATA.schema.risk;
  const subtitles = {
    V:  'Will they want it?',
    U:  'Can they use it?',
    F:  'Can we build it?',
    Vi: 'Does it work for the business?',
    C:  'Is it legal & ethical?',
  };
  container.innerHTML = Object.entries(risks).map(([code, label]) => `
    <button class="risk-card risk-${code}" onclick="jumpToFind('${code}')">
      <span class="risk-label">${label}</span>
      <span class="risk-sub">${subtitles[code]}</span>
    </button>
  `).join('');
}

function buildHomeMatrix() {
  const tbody = document.getElementById('home-matrix-body');
  if (!tbody) return;
  const risks  = DATA.schema.risk;
  const stages = DATA.schema.stage;
  const allEntries = [...DATA.methods, ...DATA.tools];
  const byId = Object.fromEntries(allEntries.map(e => [e.id, e]));

  tbody.innerHTML = Object.entries(risks).map(([rCode, rLabel]) => {
    // Teaser row: 2 chips per cell
    const cells = Object.entries(stages).map(([sCode]) => {
      const ids  = (DATA.matrix[rCode] && DATA.matrix[rCode][sCode]) || [];
      const chips = ids.slice(0, 2).map(id => {
        const m = byId[id];
        return m ? `<button class="matrix-chip" onclick="event.stopPropagation();openDrawer('${id}')">${m.n}</button>` : '';
      }).join('');
      return `<td class="matrix-cell" onclick="jumpToFind('${rCode}','${sCode}')" title="Explore ${rLabel} × ${DATA.schema.stage[sCode]}">${chips}</td>`;
    }).join('');

    const isExpanded = state.matrixExpandedRisk === rCode;
    // Total unique methods tagged with this risk (same number shown in Find when filtering by risk)
    const totalCount = DATA.methods.filter(m => m.r.includes(rCode)).length;
    const expandLabel = isExpanded
      ? `<span class="matrix-risk-action">Collapse ▴</span>`
      : `<span class="matrix-risk-action">See all ${totalCount} ▾</span>`;
    const teaserRow = `<tr>
      <th class="matrix-risk risk-${rCode}-text ${isExpanded ? 'expanded' : ''}" onclick="toggleMatrixRisk('${rCode}')">
        <span class="matrix-risk-label">${rLabel}</span>${expandLabel}
      </th>
      ${cells}
    </tr>`;

    // Expansion row
    const expandRow = isExpanded ? buildMatrixExpandRow(rCode, stages, byId) : '';
    return teaserRow + expandRow;
  }).join('');
}

function buildMatrixExpandRow(rCode, stages, byId) {
  const cols = Object.entries(stages).map(([sCode, sLabel]) => {
    const ids = (DATA.matrix[rCode] && DATA.matrix[rCode][sCode]) || [];
    const matrixIds = new Set(ids);
    // Matrix-curated first, then all other methods with matching risk + stage
    const allForStage = DATA.methods.filter(m => m.r.includes(rCode) && m.s.includes(sCode));
    const ordered = [
      ...ids.map(id => byId[id]).filter(Boolean),
      ...allForStage.filter(m => !matrixIds.has(m.id))
    ];
    const chips = ordered.map(m =>
      `<button class="matrix-expand-chip" onclick="openDrawer('${m.id}')">${m.n}</button>`
    ).join('');
    return `<div class="matrix-expand-col">
      <div class="matrix-expand-stage stage-${sCode}">${sLabel}</div>
      ${chips || '<span style="font-size:0.75rem;color:var(--text-light)">—</span>'}
    </div>`;
  }).join('');

  return `<tr class="matrix-expand-row">
    <td colspan="4"><div class="matrix-expand-inner">${cols}</div></td>
  </tr>`;
}

function toggleMatrixRisk(rCode) {
  state.matrixExpandedRisk = state.matrixExpandedRisk === rCode ? null : rCode;
  buildHomeMatrix();
}

function jumpToFind(risk, stage) {
  state.risk = risk || null;
  state.stage = stage || null;
  _switchTabSilent('find');
  syncFindUI();
  renderFind();
  pushHash(false);
}

// ---------------------------------------------------------------------------
// GUIDED WIZARD
// ---------------------------------------------------------------------------
const WIZARD_STEPS = [
  {
    id: 'risk',
    q: 'What kind of uncertainty are you facing?',
    sub: 'Pick the one that best describes your main concern right now.',
    options: [
      { code: 'V',  label: 'Will customers want this?',        desc: 'Demand, adoption, willingness to pay' },
      { code: 'U',  label: 'Can users figure it out?',          desc: 'Navigation, task completion, interface clarity' },
      { code: 'F',  label: 'Can we actually build it?',         desc: 'Technical feasibility, AI capability, dependencies' },
      { code: 'Vi', label: 'Does this work for the business?',  desc: 'Unit economics, pricing, partnerships, channels' },
      { code: 'C',  label: 'Are there legal or ethical risks?', desc: 'Compliance, privacy, fairness, AI governance' },
    ],
  },
  {
    id: 'stage',
    q: 'Where are you right now?',
    sub: 'This determines which methods are most relevant to your situation.',
    options: [
      { code: 'E',  label: 'Still understanding the problem', desc: 'Problem space — exploring needs, motivations, context' },
      { code: 'Va', label: 'Testing a solution idea',         desc: 'Solution space — validating direction or prototype' },
      { code: 'O',  label: 'Improving something live',        desc: 'Optimize — measuring and iterating on what\'s shipped' },
    ],
  },
  {
    id: 'tn',
    q: 'How much time do you have?',
    sub: 'We\'ll filter to methods that fit your timeline.',
    options: [
      { code: 'fast',  label: 'Hours or days',   desc: 'You need signal fast — sprint or urgent decision' },
      { code: 'short', label: '1–2 weeks',        desc: 'Tight but workable' },
      { code: 'med',   label: '2–4 weeks',        desc: 'Standard discovery cycle' },
      { code: null,    label: 'Flexible',          desc: 'Time is not the binding constraint' },
    ],
  },
];

function openWizard() {
  state.wizard = { open: true, step: 0, answers: {} };
  document.getElementById('wizard-overlay').classList.add('visible');
  document.getElementById('wizard-modal').classList.add('open');
  document.body.classList.add('wizard-active');
  renderWizardStep();
}

function closeWizard() {
  state.wizard.open = false;
  document.getElementById('wizard-overlay').classList.remove('visible');
  document.getElementById('wizard-modal').classList.remove('open');
  document.body.classList.remove('wizard-active');
}

function wizardSelect(stepId, code) {
  state.wizard.answers[stepId] = code;  // null = "Flexible" (no filter)

  if (state.wizard.step < WIZARD_STEPS.length - 1) {
    state.wizard.step++;
    renderWizardStep();
  } else {
    wizardFinish();
  }
}

function wizardBack() {
  if (state.wizard.step > 0) {
    state.wizard.step--;
    renderWizardStep();
  }
}

function wizardFinish() {
  const ans = state.wizard.answers;
  if (ans.risk)  state.risk = ans.risk;
  if (ans.stage) state.stage = ans.stage;
  if (ans.tn)    state.filters.tn = ans.tn;  // null (Flexible) leaves filter unset

  // If we have risk + stage, show the top-pick step before going to Find
  if (ans.risk && ans.stage) {
    state.wizard.step = WIZARD_STEPS.length; // sentinel: top-pick step
    renderWizardTopPick();
    return;
  }

  wizardApplyAndClose();
}

function wizardApplyAndClose() {
  closeWizard();
  _switchTabSilent('find');
  syncFindUI();
  renderFind();
  pushHash(false);
}

function renderWizardTopPick() {
  const body = document.getElementById('wizard-body');
  if (!body) return;

  const ans   = state.wizard.answers;
  const rCode = ans.risk;
  const sCode = ans.stage;

  const rLabel = DATA.schema.risk[rCode]  || rCode;
  const sLabel = DATA.schema.stage[sCode] || sCode;

  // Top pick: first matrix entry matching time filter, fallback to first matrix entry
  const tnFilter   = state.filters.tn || null;
  const matrixIds  = (DATA.matrix[rCode] && DATA.matrix[rCode][sCode]) || [];
  const allEntries = [...DATA.methods, ...DATA.tools];
  const matrixMethods = matrixIds.map(id => allEntries.find(e => e.id === id)).filter(Boolean);
  const topMethod  = tnFilter
    ? (matrixMethods.find(m => m.tn === tnFilter) || matrixMethods[0] || null)
    : (matrixMethods[0] || null);

  // Count matched methods respecting time filter
  const matchCount = DATA.methods.filter(m =>
    m.r.includes(rCode) && m.s.includes(sCode) && (!tnFilter || m.tn === tnFilter)
  ).length;

  const topPickHtml = topMethod ? `
    <div class="wiz-toppick-card">
      <div class="wiz-toppick-meta">
        <span class="method-id">${topMethod.id}</span>
        <span class="tier-badge tier-${topMethod.tier}">${DATA.schema.tier[topMethod.tier] || topMethod.tier}</span>
      </div>
      <h4 class="wiz-toppick-name">${topMethod.n}</h4>
      <p class="wiz-toppick-desc">${topMethod.desc ? topMethod.desc.slice(0, 140) + (topMethod.desc.length > 140 ? '…' : '') : ''}</p>
      <div class="wiz-toppick-actions">
        <button class="btn btn-primary" onclick="closeWizard(); openDrawer('${topMethod.id}')">See full details</button>
        <button class="btn btn-secondary" onclick="wizardApplyAndClose()">See all ${matchCount} matched methods</button>
      </div>
    </div>
  ` : `
    <p class="wiz-toppick-empty">No curated picks for this combination yet.</p>
    <button class="btn btn-primary" onclick="wizardApplyAndClose()">Browse matched methods</button>
  `;

  body.innerHTML = `
    <div class="wiz-header">
      <div class="wiz-dots">
        ${Array.from({ length: WIZARD_STEPS.length + 1 }, (_, i) =>
          `<span class="wiz-dot ${i < WIZARD_STEPS.length ? 'done' : 'active'}"></span>`
        ).join('')}
      </div>
      <span class="wiz-step-count">${WIZARD_STEPS.length + 1} of ${WIZARD_STEPS.length + 1}</span>
    </div>
    <div class="wiz-context-line">
      <span class="wiz-context-pill risk-${rCode}">${rLabel}</span>
      <span class="wiz-context-sep">×</span>
      <span class="wiz-context-pill stage-${sCode}">${sLabel}</span>
    </div>
    <h3 class="wiz-q">Your top pick</h3>
    ${topPickHtml}
    <div class="wiz-footer">
      <button class="wiz-back" onclick="state.wizard.step = WIZARD_STEPS.length - 1; renderWizardStep()">← Back</button>
      <span></span>
    </div>
  `;
}

function renderWizardStep() {
  const body = document.getElementById('wizard-body');
  if (!body) return;

  const stepDef = WIZARD_STEPS[state.wizard.step];
  const total   = WIZARD_STEPS.length;
  const current = state.wizard.step + 1;

  const dotsHtml = Array.from({ length: total }, (_, i) =>
    `<span class="wiz-dot ${i < state.wizard.step ? 'done' : ''} ${i === state.wizard.step ? 'active' : ''}"></span>`
  ).join('');

  const optionsHtml = stepDef.options.map(opt => {
    const selected = state.wizard.answers[stepDef.id] === opt.code;
    const riskClass = stepDef.id === 'risk' && opt.code ? `wiz-risk-${opt.code}` : '';
    return `
      <button class="wiz-option ${selected ? 'selected' : ''} ${riskClass}"
              onclick="wizardSelect('${stepDef.id}', ${opt.code === null ? 'null' : `'${opt.code}'`})">
        <span class="wiz-opt-label">${opt.label}</span>
        <span class="wiz-opt-desc">${opt.desc}</span>
      </button>`;
  }).join('');

  body.innerHTML = `
    <div class="wiz-header">
      <div class="wiz-dots">${dotsHtml}</div>
      <span class="wiz-step-count">${current} of ${total}</span>
    </div>
    <h3 class="wiz-q">${stepDef.q}</h3>
    ${stepDef.sub ? `<p class="wiz-sub">${stepDef.sub}</p>` : ''}
    <div class="wiz-options">${optionsHtml}</div>
    <div class="wiz-footer">
      ${state.wizard.step > 0
        ? `<button class="wiz-back" onclick="wizardBack()">← Back</button>`
        : `<span></span>`}
      <button class="wiz-skip" onclick="closeWizard(); switchTab('find')">Skip — browse all</button>
    </div>
  `;
}

// ---------------------------------------------------------------------------
// FIND — filters UI
// ---------------------------------------------------------------------------
function buildFindFilters() {
  buildRiskPills();
  buildStagePills();
  buildCatPills();
  buildTnPills();
  buildEffPills();
}

function buildRiskPills() {
  const el = document.getElementById('filter-risk');
  if (!el) return;
  el.innerHTML = Object.entries(DATA.schema.risk).map(([code, label]) =>
    `<button class="filter-pill risk-pill risk-${code}" data-risk="${code}" onclick="toggleRisk('${code}')">${label}</button>`
  ).join('');
}

function buildStagePills() {
  const el = document.getElementById('filter-stage');
  if (!el) return;
  el.innerHTML = Object.entries(DATA.schema.stage).map(([code, label]) =>
    `<button class="filter-pill stage-pill stage-${code}" data-stage="${code}" onclick="toggleStage('${code}')">${label}</button>`
  ).join('');
}

function buildCatPills() {
  const el = document.getElementById('filter-cat');
  if (!el) return;
  const pool = state.filters.showTools ? [...DATA.methods, ...DATA.tools] : DATA.methods;
  const usedCats = new Set(pool.map(m => m.cat));
  el.innerHTML = Object.entries(DATA.schema.cat)
    .filter(([code]) => usedCats.has(code))
    .map(([code, label]) =>
      `<button class="filter-pill cat-pill" data-cat="${code}" onclick="toggleCat('${code}')">${label}</button>`
    ).join('');
}

function buildTnPills() {
  const el = document.getElementById('filter-tn');
  if (!el) return;
  const pool = state.filters.showTools ? [...DATA.methods, ...DATA.tools] : DATA.methods;
  const usedTn = new Set(pool.map(m => m.tn).filter(Boolean));
  el.innerHTML = Object.entries(DATA.schema.tn)
    .filter(([code]) => usedTn.has(code))
    .map(([code, label]) =>
      `<button class="filter-pill tn-pill" data-tn="${code}" onclick="toggleTn('${code}')">${label}</button>`
    ).join('');
}

function buildEffPills() {
  const el = document.getElementById('filter-eff');
  if (!el) return;
  const pool = state.filters.showTools ? [...DATA.methods, ...DATA.tools] : DATA.methods;
  const usedEff = new Set(pool.map(m => m.eff).filter(Boolean));
  el.innerHTML = Object.entries(DATA.schema.eff)
    .filter(([code]) => usedEff.has(code))
    .map(([code, label]) =>
      `<button class="filter-pill eff-pill" data-eff="${code}" onclick="toggleEff('${code}')">${label}</button>`
    ).join('');
}

function toggleRisk(code) {
  state.risk = state.risk === code ? null : code;
  syncFindUI();
  renderFind();
  pushHash(true);
}

function toggleStage(code) {
  state.stage = state.stage === code ? null : code;
  syncFindUI();
  renderFind();
  pushHash(true);
}

function toggleCat(code) {
  state.cat = state.cat === code ? null : code;
  syncFindUI();
  renderFind();
  pushHash(true);
}

function toggleTn(code) {
  state.filters.tn = state.filters.tn === code ? null : code;
  syncFindUI();
  renderFind();
}

function toggleEff(code) {
  state.filters.eff = state.filters.eff === code ? null : code;
  syncFindUI();
  renderFind();
}

function toggleConstraint(key, value) {
  state.filters[key] = state.filters[key] === value ? null : value;
  syncFindUI();
  renderFind();
}

function setSearch(val) {
  state.search = val.trim().toLowerCase();
  renderFind();
}

function toggleShowTools() {
  state.filters.showTools = !state.filters.showTools;
  if (state.cat) {
    const pool = state.filters.showTools ? [...DATA.methods, ...DATA.tools] : DATA.methods;
    if (!new Set(pool.map(m => m.cat)).has(state.cat)) state.cat = null;
  }
  buildCatPills();
  buildTnPills();
  buildEffPills();
  syncFindUI();
  renderFind();
}

function resetAllFilters() {
  state.risk = null;
  state.stage = null;
  state.cat = null;
  state.search = '';
  state.filters = { euOff: false, ltOff: false, showTools: false, tn: null, eff: null };
  const searchEl = document.getElementById('method-search');
  if (searchEl) searchEl.value = '';
  syncFindUI();
  renderFind();
}

function syncFindUI() {
  // Risk pills
  document.querySelectorAll('.risk-pill').forEach(el => {
    el.classList.toggle('active', el.dataset.risk === state.risk);
  });
  // Stage pills
  document.querySelectorAll('.stage-pill').forEach(el => {
    el.classList.toggle('active', el.dataset.stage === state.stage);
  });
  // Cat pills
  document.querySelectorAll('.cat-pill').forEach(el => {
    el.classList.toggle('active', el.dataset.cat === state.cat);
  });
  // Time pills
  document.querySelectorAll('.tn-pill').forEach(el => {
    el.classList.toggle('active', el.dataset.tn === state.filters.tn);
  });
  // Effort pills
  document.querySelectorAll('.eff-pill').forEach(el => {
    el.classList.toggle('active', el.dataset.eff === state.filters.eff);
  });
  // Constraint pills (legacy [data-key] selector — kept for any future use)
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.dataset.key;
    const val = el.dataset.value;
    el.classList.toggle('active', state.filters[key] === val);
  });
  // Tools toggle
  const toolsToggle = document.getElementById('show-tools-toggle');
  if (toolsToggle) toolsToggle.classList.toggle('active', state.filters.showTools);
  // Reset button visibility
  const resetBtn = document.getElementById('reset-filters');
  const hasFilters = state.risk || state.stage || state.cat || state.search ||
    state.filters.tn || state.filters.eff || state.filters.showTools;
  if (resetBtn) resetBtn.classList.toggle('hidden', !hasFilters);
}

// ---------------------------------------------------------------------------
// FIND — render grid
// ---------------------------------------------------------------------------
function getFilteredMethods() {
  let pool = state.filters.showTools ? [...DATA.methods, ...DATA.tools] : [...DATA.methods];

  if (state.risk)        pool = pool.filter(m => m.r && m.r.includes(state.risk));
  if (state.stage)       pool = pool.filter(m => m.s && m.s.includes(state.stage));
  if (state.cat)         pool = pool.filter(m => m.cat === state.cat);
  if (state.filters.tn)  pool = pool.filter(m => m.tn === state.filters.tn);
  if (state.filters.eff) pool = pool.filter(m => m.eff === state.filters.eff);

  if (state.search) {
    const q = state.search;
    pool = pool.filter(m =>
      m.id.toLowerCase().includes(q) ||
      m.n.toLowerCase().includes(q) ||
      (m.desc && m.desc.toLowerCase().includes(q)) ||
      (m.out && m.out.toLowerCase().includes(q)) ||
      (m.wtu && m.wtu.some(w => w.toLowerCase().includes(q)))
    );
  }

  // Sort: if risk+stage selected and matrix has ordered list, use that order first
  if (state.risk && state.stage) {
    const matrixOrder = (DATA.matrix[state.risk] && DATA.matrix[state.risk][state.stage]) || [];
    pool.sort((a, b) => {
      const ai = matrixOrder.indexOf(a.id);
      const bi = matrixOrder.indexOf(b.id);
      if (ai >= 0 && bi >= 0) return ai - bi;
      if (ai >= 0) return -1;
      if (bi >= 0) return 1;
      return 0;
    });
  }

  return pool;
}

function renderFind() {
  const grid = document.getElementById('method-grid');
  const countEl = document.getElementById('methods-count');
  if (!grid) return;

  const pool = getFilteredMethods();

  if (countEl) {
    const total = DATA.methods.length + (state.filters.showTools ? DATA.tools.length : 0);
    countEl.textContent = pool.length === total
      ? `${total} methods`
      : `${pool.length} of ${total} methods`;
  }

  if (pool.length === 0) {
    grid.innerHTML = `<div class="empty-state">No methods match your filters. <button class="link-btn" onclick="resetAllFilters()">Reset filters</button></div>`;
    return;
  }

  grid.innerHTML = pool.map(m => renderCard(m)).join('');
}

function renderCard(m) {
  const isContextTool = DATA.tools.some(t => t.id === m.id);
  const catLabel  = DATA.schema.cat[m.cat] || m.cat;
  const evLabel   = DATA.schema.ev[m.ev]   || '—';
  const effLabel  = DATA.schema.eff[m.eff] || '—';
  const tnLabel   = DATA.schema.tn[m.tn]   || m.t || '—';
  const tierClass = m.tier === 'core' ? 'tier-core' : m.tier === 'spec' ? 'tier-spec' : 'tier-ext';

  const riskShort = { V: 'Value', U: 'Usability', F: 'Feasibility', Vi: 'Viability', C: 'Compliance' };
  const risks  = (m.r || []).map(r =>
    `<span class="card-risk-pill risk-bg-${r}">${riskShort[r] || r}</span>`
  ).join('');
  const stages = (m.s || []).map(s =>
    `<span class="card-stage-label stage-${s}">${DATA.schema.stage[s] || s}</span>`
  ).join('<span class="card-stage-sep">·</span>');

  return `
    <article class="method-card ${isContextTool ? 'is-tool' : ''}" onclick="openDrawer('${m.id}')">
      <div class="card-top">
        <div class="card-title-block">
          <h3 class="card-name">${m.n}</h3>
          <span class="card-cat">${catLabel}${isContextTool ? ' · context tool' : ''}</span>
        </div>
        <span class="tier-badge ${tierClass}">${m.tier}</span>
      </div>
      <div class="card-taxonomy">
        <div class="card-risks">${risks}</div>
        ${stages ? `<div class="card-stages">${stages}</div>` : ''}
      </div>
      <div class="card-metrics">
        <div class="metric-item">
          <span class="metric-icon">📊</span>
          <span class="metric-val">${evLabel}</span>
          <span class="metric-label">Evidence</span>
        </div>
        <div class="metric-item">
          <span class="metric-icon">⚡</span>
          <span class="metric-val">${effLabel}</span>
          <span class="metric-label">Effort</span>
        </div>
        <div class="metric-item">
          <span class="metric-icon">⏱</span>
          <span class="metric-val">${tnLabel}</span>
          <span class="metric-label">Time</span>
        </div>
      </div>
      <p class="card-desc">${m.desc ? m.desc.slice(0, 120) + (m.desc.length > 120 ? '…' : '') : ''}</p>
    </article>
  `;
}

// ---------------------------------------------------------------------------
// METHOD DETAIL DRAWER
// ---------------------------------------------------------------------------
function setupDrawer() {
  const overlay = document.getElementById('drawer-overlay');
  if (overlay) overlay.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && state.drawerOpen) closeDrawer();
  });
}

function openDrawer(id) {
  const allEntries = [...DATA.methods, ...DATA.tools];
  const m = allEntries.find(e => e.id === id);
  if (!m) return;

  state.activeMethod = id;
  state.drawerOpen = true;

  const drawer = document.getElementById('method-drawer');
  const body = document.getElementById('drawer-body');
  if (!drawer || !body) return;

  body.innerHTML = renderDrawerContent(m);
  drawer.classList.add('open');
  document.getElementById('drawer-overlay').classList.add('visible');
  document.body.classList.add('drawer-active');
  pushHash(false);
}

/** Open drawer without modifying history — used when restoring from hash. */
function openDrawerSilent(id) {
  const allEntries = [...DATA.methods, ...DATA.tools];
  const m = allEntries.find(e => e.id === id);
  if (!m) return;

  state.activeMethod = id;
  state.drawerOpen = true;

  const drawer = document.getElementById('method-drawer');
  const body = document.getElementById('drawer-body');
  if (!drawer || !body) return;

  body.innerHTML = renderDrawerContent(m);
  drawer.classList.add('open');
  document.getElementById('drawer-overlay').classList.add('visible');
  document.body.classList.add('drawer-active');
}

function closeDrawer() {
  closeDrawerSilent();
  pushHash(false);
}

/** Close drawer without modifying history — used by hashchange handler. */
function closeDrawerSilent() {
  state.drawerOpen = false;
  state.activeMethod = null;
  const drawer = document.getElementById('method-drawer');
  if (drawer) drawer.classList.remove('open');
  const overlay = document.getElementById('drawer-overlay');
  if (overlay) overlay.classList.remove('visible');
  document.body.classList.remove('drawer-active');
}

// ---------------------------------------------------------------------------
// METHOD DETAIL DRAWER — section renderers
// ---------------------------------------------------------------------------

function drawerHeader(m, isContextTool) {
  const tierLabel = DATA.schema.tier[m.tier] || m.tier;
  const catLabel  = DATA.schema.cat[m.cat]   || m.cat;
  const risks     = (m.r || []).map(r => `<span class="tag risk-tag risk-${r}">${DATA.schema.risk[r] || r}</span>`).join('');
  const stages    = (m.s || []).map(s => `<span class="tag stage-tag stage-${s}">${DATA.schema.stage[s] || s}</span>`).join('');
  const boolFlags = [];
  if (m.eu === true) boolFlags.push('<span class="flag-tag">Needs existing users</span>');
  if (m.lt === true) boolFlags.push('<span class="flag-tag">Needs live traffic</span>');
  if (m.lr === true) boolFlags.push('<span class="flag-tag flag-legal">Needs legal review</span>');
  const kcNote = isContextTool && m.kc
    ? `<div class="kc-banner"><strong>Context Tool Note:</strong> ${m.kc}</div>`
    : '';
  return `
    <div class="drawer-id-row">
      <span class="method-id large">${m.id}</span>
      <span class="tier-badge tier-${m.tier}">${tierLabel}</span>
      ${isContextTool ? '<span class="tool-badge">context tool</span>' : ''}
    </div>
    <h2 class="drawer-title">${m.n}</h2>
    <div class="drawer-tags">
      <span class="tag cat-tag cat-${m.cat}">${catLabel}</span>
      ${risks}
      ${stages}
    </div>
    ${boolFlags.length ? `<div class="flag-row">${boolFlags.join('')}</div>` : ''}
    ${kcNote}
  `;
}

function drawerMetaGrid(m) {
  const evLabel   = DATA.schema.ev[m.ev]       || '';
  const evtLabel  = DATA.schema.evtype[m.evtype]|| '';
  const effLabel  = DATA.schema.eff[m.eff]     || '';
  const cxLabel   = DATA.schema.cx[m.cx]       || '';
  const costLabel = DATA.schema.cost[m.cost]   || '';
  const tsLabels  = (m.ts || []).map(code => DATA.schema.ts[code] || code).join(', ');
  const csLabels  = (m.cs || []).map(code => DATA.schema.cs[code] || code).join(', ');
  return `
    <div class="meta-grid">
      ${m.ev !== 'na' ? `<div class="meta-cell"><span class="meta-key">Evidence</span><span class="meta-val">${evLabel}${evtLabel ? ' · ' + evtLabel : ''}</span></div>` : ''}
      ${effLabel  ? `<div class="meta-cell"><span class="meta-key">Effort</span><span class="meta-val">${effLabel}</span></div>` : ''}
      ${cxLabel   ? `<div class="meta-cell"><span class="meta-key">Complexity</span><span class="meta-val">${cxLabel}</span></div>` : ''}
      ${m.t       ? `<div class="meta-cell"><span class="meta-key">Time</span><span class="meta-val">${m.t}</span></div>` : ''}
      ${costLabel ? `<div class="meta-cell"><span class="meta-key">Cost</span><span class="meta-val">${costLabel}</span></div>` : ''}
      ${tsLabels  ? `<div class="meta-cell"><span class="meta-key">Team</span><span class="meta-val">${tsLabels}</span></div>` : ''}
      ${csLabels  ? `<div class="meta-cell"><span class="meta-key">Best for</span><span class="meta-val">${csLabels}</span></div>` : ''}
    </div>
  `;
}

function drawerDescription(m) {
  return `<section class="drawer-section"><p class="drawer-desc">${m.desc || ''}</p></section>`;
}

function drawerHowToApply(m) {
  if (!m.how || !m.how.length) return '';
  return `
    <section class="drawer-section">
      <h4>How to Apply</h4>
      <ol class="how-list">${m.how.map(s => `<li>${s}</li>`).join('')}</ol>
    </section>
  `;
}

function drawerWhenToUse(m) {
  if (!m.wtu || !m.wtu.length) return '';
  return `
    <section class="drawer-section">
      <h4>When to Use</h4>
      <ul class="bullet-list">${m.wtu.map(s => `<li>${s}</li>`).join('')}</ul>
    </section>
  `;
}

function drawerWhenNotToUse(m) {
  if (!m.wnu || !m.wnu.length) return '';
  return `
    <section class="drawer-section">
      <h4>When NOT to Use</h4>
      <ul class="bullet-list wnu-list">${m.wnu.map(s => `<li>${s}</li>`).join('')}</ul>
    </section>
  `;
}

function drawerOutput(m) {
  if (!m.out) return '';
  return `
    <section class="drawer-section">
      <h4>Output / Deliverable</h4>
      <p>${m.out}</p>
    </section>
  `;
}

function drawerAI(m) {
  if (!m.ai) return '';
  return `
    <section class="drawer-section">
      <h4>AI Augmentation</h4>
      <p>${m.ai}</p>
    </section>
  `;
}

function drawerOrigin(m) {
  if (!m.orig) return '';
  return `
    <section class="drawer-section drawer-origin">
      <h4>Origin</h4>
      <p>${m.orig}</p>
    </section>
  `;
}

function drawerRelations(m) {
  const allEntries = [...DATA.methods, ...DATA.tools];
  const chip = id => {
    const e = allEntries.find(x => x.id === id);
    return e ? `<button class="rel-chip" onclick="openDrawer('${id}')">${id} ${e.n}</button>` : '';
  };
  const relHtml = m.rel && m.rel.length
    ? `<div class="rel-row"><span class="rel-label">Related:</span>${m.rel.map(chip).join('')}</div>`
    : '';
  const altHtml = m.alt && m.alt.length
    ? `<div class="rel-row"><span class="rel-label">Alternatives:</span>${m.alt.map(chip).join('')}</div>`
    : '';
  const preHtml = m.pre && m.pre.length
    ? `<div class="rel-row"><span class="rel-label">Prerequisites:</span>${m.pre.map(chip).join('')}</div>`
    : '';
  if (!relHtml && !altHtml && !preHtml) return '';
  return `<section class="drawer-section drawer-relations">${relHtml}${altHtml}${preHtml}</section>`;
}

// ---------------------------------------------------------------------------
// METHOD DETAIL DRAWER — composition
// ---------------------------------------------------------------------------
function renderDrawerContent(m) {
  const isContextTool = DATA.tools.some(t => t.id === m.id);
  return `
    <div class="drawer-inner">
      ${drawerHeader(m, isContextTool)}
      ${drawerMetaGrid(m)}
      ${drawerDescription(m)}
      ${drawerHowToApply(m)}
      ${drawerWhenToUse(m)}
      ${drawerWhenNotToUse(m)}
      ${drawerOutput(m)}
      ${drawerAI(m)}
      ${drawerOrigin(m)}
      ${drawerRelations(m)}
    </div>
  `;
}

// ---------------------------------------------------------------------------
// DIAGNOSE
// ---------------------------------------------------------------------------
function buildDiag() {
  const container = document.getElementById('diag-questions');
  if (!container) return;

  container.innerHTML = DATA.diag.map((q, i) => `
    <div class="diag-question" id="dq-${i}">
      <p class="q-text">${i + 1}. ${q.q}</p>
      <div class="q-score-row">
        ${[0,1,2,3].map(n => `
          <button class="score-btn" data-qi="${i}" data-score="${n}" onclick="setDiagScore(${i},${n})">
            <span class="score-num">${n}</span>
            <span class="score-label">${['Never','Rarely','Often','Always'][n]}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function setDiagScore(qi, score) {
  state.diagScores[qi] = score;
  // Highlight selected
  document.querySelectorAll(`[data-qi="${qi}"]`).forEach(btn => {
    btn.classList.toggle('selected', parseInt(btn.dataset.score) === score);
  });
  // Check if all answered
  const allAnswered = DATA.diag.every((_, i) => state.diagScores[i] !== undefined);
  const submitBtn = document.getElementById('diag-submit');
  if (submitBtn) submitBtn.classList.toggle('hidden', !allAnswered);
}

function submitDiag() {
  const total = Object.values(state.diagScores).reduce((a, b) => a + b, 0);
  state.diagDone = true;
  renderDiagResult(total);
}

function resetDiag() {
  state.diagScores = {};
  state.diagDone = false;
  document.querySelectorAll('.score-btn').forEach(btn => btn.classList.remove('selected'));
  const submitBtn = document.getElementById('diag-submit');
  if (submitBtn) submitBtn.classList.add('hidden');
  const resultEl = document.getElementById('diag-result');
  if (resultEl) resultEl.innerHTML = '';
}

function renderDiagResult(total) {
  const resultEl = document.getElementById('diag-result');
  if (!resultEl) return;

  const bands = [
    { max: 8,  label: 'Deliberate discovery',    desc: 'You are matching methods to risks.', cls: 'band-good' },
    { max: 15, label: 'Mild karaoke',             desc: 'Some defaults creeping in. Review your method selection discipline.', cls: 'band-mild' },
    { max: 21, label: 'Significant karaoke',      desc: 'Build or revisit your risk-to-method map.', cls: 'band-sig' },
    { max: 30, label: 'Full karaoke',             desc: 'The discovery practice needs a fundamental reset.', cls: 'band-full' },
  ];
  const band = bands.find(b => total <= b.max) || bands[bands.length - 1];

  // Find top patterns: map highest-scoring questions to their patterns
  const patternScores = {};
  DATA.diag.forEach((q, i) => {
    const score = state.diagScores[i] || 0;
    if (score >= 2 && q.pat) {
      patternScores[q.pat] = (patternScores[q.pat] || 0) + score;
    }
  });
  const topPatterns = Object.entries(patternScores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([name]) => DATA.patterns.find(p => p.n === name))
    .filter(Boolean);

  const patternsHtml = topPatterns.length ? `
    <div class="diag-patterns">
      <h4>Your top patterns</h4>
      ${topPatterns.map(p => `
        <div class="pattern-result-card">
          <h5>${p.n}</h5>
          <p class="pattern-pat">"${p.pat}"</p>
          ${p.signs.length ? `<ul class="pattern-signs">${p.signs.slice(0,3).map(s => `<li>${s}</li>`).join('')}</ul>` : ''}
          ${p.rec.length ? `<div class="pattern-rec"><strong>Recovery:</strong> ${p.rec[0]}</div>` : ''}
        </div>
      `).join('')}
    </div>
  ` : '';

  resultEl.innerHTML = `
    <div class="diag-result-card ${band.cls}">
      <div class="result-score">${total}<span class="result-max">/30</span></div>
      <div class="result-band">${band.label}</div>
      <p class="result-desc">${band.desc}</p>
    </div>
    ${patternsHtml}
    <div class="diag-actions">
      <button class="btn btn-primary" onclick="jumpToFind()">Find the right method</button>
      <button class="btn btn-secondary" onclick="resetDiag()">Retake diagnostic</button>
    </div>
  `;

  resultEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ---------------------------------------------------------------------------
// REFERENCE TABLE
// ---------------------------------------------------------------------------
function buildRefHeader() {
  const sortEl = document.getElementById('ref-sort');
  if (sortEl) sortEl.addEventListener('change', e => { state.refSort = e.target.value; renderRef(); });
  const catEl = document.getElementById('ref-cat-filter');
  if (catEl) {
    catEl.innerHTML = `<option value="">All categories</option>` +
      Object.entries(DATA.schema.cat).map(([code, label]) =>
        `<option value="${code}">${label}</option>`
      ).join('');
    catEl.addEventListener('change', e => { state.refCat = e.target.value; renderRef(); });
  }
}

function renderRef() {
  const tbody = document.getElementById('ref-body');
  if (!tbody) return;

  let pool = [...DATA.methods, ...DATA.tools];
  if (state.refCat) pool = pool.filter(m => m.cat === state.refCat);

  const sortFns = {
    id:       (a, b) => parseInt(a.id.slice(1)) - parseInt(b.id.slice(1)),
    name:     (a, b) => a.n.localeCompare(b.n),
    category: (a, b) => a.cat.localeCompare(b.cat),
    effort:   (a, b) => {
      const order = ['low','lm','med','mh','high'];
      return order.indexOf(a.eff) - order.indexOf(b.eff);
    },
    evidence: (a, b) => {
      const order = ['na','weak','wm','mod','ms','str'];
      return order.indexOf(a.ev||'na') - order.indexOf(b.ev||'na');
    },
  };
  pool.sort(sortFns[state.refSort] || sortFns.id);

  const isToolSet = new Set(DATA.tools.map(t => t.id));

  tbody.innerHTML = pool.map(m => {
    const isTool = isToolSet.has(m.id);
    const risks  = (m.r || []).map(r => `<span class="tag risk-tag risk-${r} xs">${r}</span>`).join('');
    const stages = (m.s || []).map(s => `<span class="tag stage-tag stage-${s} xs">${DATA.schema.stage[s]}</span>`).join('');
    return `
      <tr class="ref-row ${isTool ? 'is-tool-row' : ''}" onclick="openDrawer('${m.id}')">
        <td class="ref-id">${m.id}</td>
        <td class="ref-name">${m.n}${isTool ? ' <span class="tool-badge xs">tool</span>' : ''}</td>
        <td><span class="tag cat-tag cat-${m.cat} xs">${DATA.schema.cat[m.cat] || m.cat}</span></td>
        <td>${risks}</td>
        <td>${stages}</td>
        <td>${DATA.schema.eff[m.eff] || '—'}</td>
        <td>${DATA.schema.ev[m.ev] || '—'}</td>
        <td>${m.t || '—'}</td>
      </tr>
    `;
  }).join('');
}

// ---------------------------------------------------------------------------
// Refinement panel toggle
// ---------------------------------------------------------------------------
