/* ============================================
   Discovery Karaoke Prevention Engine — App Logic
   ============================================ */

// --- State ---
const state = {
  activeFilters: { risk: [], stage: [], category: [] },
  searchQuery: '',
  quizAnswers: {},
  activeMatrixCell: null
};

// --- Risk color map ---
const RISK_COLORS = {
  V: 'var(--risk-value)', U: 'var(--risk-usability)',
  F: 'var(--risk-feasibility)', Vi: 'var(--risk-viability)', C: 'var(--risk-compliance)'
};
const RISK_NAMES = {
  V: 'Value', U: 'Usability', F: 'Feasibility', Vi: 'Viability', C: 'Compliance'
};
const MATRIX_KEYS = {
  value: 'Value/Desirability', usability: 'Usability',
  feasibility: 'Feasibility', viability: 'Viability', compliance: 'Compliance & Ethics'
};

// --- Helpers ---
function $(sel) { return document.querySelector(sel); }
function $$(sel) { return document.querySelectorAll(sel); }
function getMethod(id) { return DATA.methods.find(m => m.id === id); }
function getTool(id) { return DATA.tools.find(t => t.id === id); }
function escHtml(s) { const d = document.createElement('div'); d.textContent = s; return d.innerHTML; }

function riskPill(code, small) {
  const sz = small ? 'font-size:0.65rem;padding:0.1rem 0.35rem;' : '';
  return `<span class="risk-pill" data-risk="${code}" style="${sz}">${RISK_NAMES[code] || code}</span>`;
}

// --- Tab Navigation ---
function switchTab(tab) {
  $$('.tab-content').forEach(el => el.classList.remove('active'));
  $$('.nav-btn').forEach(el => el.classList.remove('active'));
  $(`#tab-${tab}`).classList.add('active');
  const navBtn = $(`.nav-btn[data-tab="${tab}"]`);
  if (navBtn) navBtn.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- Initialize ---
document.addEventListener('DOMContentLoaded', () => {
  // Nav buttons
  $$('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  initHome();
  initMethods();
  initTools();
  initMatrix();
  initCompare();
  initDiagnose();
});

// ==========================================
// HOME
// ==========================================
function initHome() {
  // Risk pills
  const container = $('#risk-pills');
  Object.entries(DATA.riskLabels).forEach(([code, info]) => {
    const pill = document.createElement('span');
    pill.className = 'risk-pill';
    pill.dataset.risk = code;
    pill.textContent = info.name;
    pill.title = info.question;
    pill.onclick = () => {
      state.activeFilters = { risk: [code], stage: [], category: [] };
      switchTab('methods');
      renderMethodFilters();
      renderMethods();
    };
    container.appendChild(pill);
  });

  // Karaoke symptoms
  const symptoms = [
    '"We always do user interviews" — Do you need generative research, or would evaluative methods answer faster?',
    '"Let\'s run a design sprint" — Is 5 days justified, or could assumption mapping + fake door get you there?',
    '"We need a 3-month beta" — Would a 2-week concierge test give the same evidence at 1/6 the time?',
    '"Let\'s survey our users" — Is the question quantitative, or do you need qualitative depth?',
    '"We should prototype this" — Are you testing usability (prototype) or value (landing page)?',
    '"Let\'s do more research" — What specific risk are you reducing? If you can\'t name it, you\'re procrastinating.'
  ];
  const sympContainer = $('#karaoke-symptoms');
  symptoms.forEach(s => {
    sympContainer.innerHTML += `<div class="symptom-item"><span class="symptom-icon">&#x1f3a4;</span><span>${s}</span></div>`;
  });
}

// ==========================================
// METHODS
// ==========================================
function initMethods() {
  renderMethodFilters();
  renderMethods();
  $('#method-search').addEventListener('input', e => {
    state.searchQuery = e.target.value.toLowerCase();
    renderMethods();
  });
}

function renderMethodFilters() {
  // Risk filters
  const riskContainer = $('#filter-risk');
  riskContainer.innerHTML = '';
  Object.entries(RISK_NAMES).forEach(([code, name]) => {
    const pill = document.createElement('span');
    pill.className = 'filter-pill' + (state.activeFilters.risk.includes(code) ? ' active' : '');
    pill.textContent = name;
    pill.onclick = () => toggleFilter('risk', code);
    riskContainer.appendChild(pill);
  });

  // Stage filters
  const stageContainer = $('#filter-stage');
  stageContainer.innerHTML = '';
  ['Explore', 'Validate', 'Optimize'].forEach(stage => {
    const pill = document.createElement('span');
    pill.className = 'filter-pill' + (state.activeFilters.stage.includes(stage) ? ' active' : '');
    pill.textContent = stage;
    pill.onclick = () => toggleFilter('stage', stage);
    stageContainer.appendChild(pill);
  });

  // Category filters
  const catContainer = $('#filter-category');
  catContainer.innerHTML = '';
  ['generative', 'evaluative', 'experimentation', 'analytics'].forEach(cat => {
    const pill = document.createElement('span');
    pill.className = 'filter-pill' + (state.activeFilters.category.includes(cat) ? ' active' : '');
    pill.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    pill.onclick = () => toggleFilter('category', cat);
    catContainer.appendChild(pill);
  });
}

function toggleFilter(type, value) {
  const arr = state.activeFilters[type];
  const idx = arr.indexOf(value);
  if (idx >= 0) arr.splice(idx, 1);
  else arr.push(value);
  renderMethodFilters();
  renderMethods();
}

function filterMethods() {
  return DATA.methods.filter(m => {
    // Risk filter
    if (state.activeFilters.risk.length > 0) {
      if (!m.risk.some(r => state.activeFilters.risk.includes(r))) return false;
    }
    // Stage filter
    if (state.activeFilters.stage.length > 0) {
      if (!m.stage.some(s => state.activeFilters.stage.includes(s))) return false;
    }
    // Category filter
    if (state.activeFilters.category.length > 0) {
      if (!state.activeFilters.category.includes(m.category)) return false;
    }
    // Search
    if (state.searchQuery) {
      const haystack = (m.id + ' ' + m.name + ' ' + m.description).toLowerCase();
      if (!haystack.includes(state.searchQuery)) return false;
    }
    return true;
  });
}

function renderMethods() {
  const filtered = filterMethods();
  $('#methods-count').textContent = `Showing ${filtered.length} of ${DATA.methods.length} methods`;

  const grid = $('#method-grid');
  grid.innerHTML = filtered.map(m => `
    <div class="method-card" data-primary-risk="${m.risk[0]}" onclick="openMethodDetail('${m.id}')">
      <div class="method-card-header">
        <span class="method-id">${m.id}</span>
        <span class="method-tag meta">${m.time} · ${m.evidence}</span>
      </div>
      <div class="method-name">${escHtml(m.name)}</div>
      <div class="method-desc">${escHtml(m.description)}</div>
      <div class="method-tags">
        ${m.risk.map(r => `<span class="method-tag risk" style="background:${RISK_COLORS[r]}">${RISK_NAMES[r]}</span>`).join('')}
        ${m.stage.map(s => `<span class="method-tag stage">${s}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

// ==========================================
// TOOLS
// ==========================================
function initTools() {
  const grid = $('#tool-grid');
  const grouped = { framework: [], synthesis: [], prioritization: [], 'operating-practice': [] };
  DATA.tools.forEach(t => {
    const cat = t.category || 'framework';
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(t);
  });

  const catLabels = {
    framework: 'Frameworks', synthesis: 'Synthesis Tools',
    prioritization: 'Prioritization', 'operating-practice': 'Operating Practices'
  };

  let html = '';
  Object.entries(grouped).forEach(([cat, tools]) => {
    if (tools.length === 0) return;
    html += `<div style="grid-column:1/-1;margin-top:0.5rem"><h3 style="font-size:0.85rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.05em">${catLabels[cat] || cat} (${tools.length})</h3></div>`;
    tools.forEach(t => {
      html += `
        <div class="tool-card" data-category="${cat}" onclick="openToolDetail('${t.id}')">
          <div class="tool-category-tag">${t.id} · ${catLabels[cat] || cat}</div>
          <div class="method-name" style="margin-top:0.3rem">${escHtml(t.name)}</div>
          <div class="method-desc">${escHtml(t.description)}</div>
        </div>`;
    });
  });
  grid.innerHTML = html;
}

// ==========================================
// MATRIX
// ==========================================
function initMatrix() {
  const body = $('#matrix-body');
  const risks = [
    { key: 'value', label: 'Value/Desirability', question: 'Will they want this?', code: 'V' },
    { key: 'usability', label: 'Usability', question: 'Can they use it?', code: 'U' },
    { key: 'feasibility', label: 'Feasibility', question: 'Can we build it?', code: 'F' },
    { key: 'viability', label: 'Viability', question: 'Business works?', code: 'Vi' },
    { key: 'compliance', label: 'Compliance & Ethics', question: 'Legal & ethical?', code: 'C' }
  ];

  risks.forEach(risk => {
    const matrixData = DATA.matrix[risk.key];
    if (!matrixData) return;
    const topMethods = matrixData.top || {};

    const row = document.createElement('tr');
    // Risk label cell
    row.innerHTML = `<td><div class="matrix-risk-label" style="color:${RISK_COLORS[risk.code]}">${risk.label}</div><div class="matrix-risk-question">${risk.question}</div></td>`;

    ['explore', 'validate', 'optimize'].forEach(stage => {
      const methods = matrixData[stage] || [];
      const tops = topMethods[stage] || [];
      const cell = document.createElement('td');
      cell.className = 'matrix-cell';
      cell.dataset.risk = risk.key;
      cell.dataset.stage = stage;

      // Show top 2 prominently, rest as subtle
      const topSet = new Set(tops);
      cell.innerHTML = methods.slice(0, 6).map(id => {
        const m = getMethod(id);
        const name = m ? m.name.split('(')[0].trim() : id;
        const short = name.length > 20 ? name.substring(0, 18) + '...' : name;
        const isTop = topSet.has(id);
        return `<span class="matrix-method-tag${isTop ? ' top' : ''}" title="${m ? m.name : id}">${id}</span>`;
      }).join('') + (methods.length > 6 ? `<span class="matrix-method-tag" style="color:var(--text-muted)">+${methods.length - 6}</span>` : '');

      cell.onclick = () => showMatrixDetail(risk, stage, methods);
      row.appendChild(cell);
    });

    body.appendChild(row);
  });
}

function showMatrixDetail(risk, stage, methodIds) {
  const detail = $('#matrix-detail');
  detail.classList.remove('hidden');

  const methods = methodIds.map(id => getMethod(id)).filter(Boolean);
  detail.innerHTML = `
    <h3 style="color:${RISK_COLORS[risk.code]}">${risk.label} &times; ${stage.charAt(0).toUpperCase() + stage.slice(1)}</h3>
    <p style="color:var(--text-secondary);margin-bottom:1rem">${methods.length} methods available for this risk-stage combination.</p>
    <div class="method-grid">
      ${methods.map(m => `
        <div class="method-card" data-primary-risk="${m.risk[0]}" onclick="openMethodDetail('${m.id}')">
          <div class="method-card-header">
            <span class="method-id">${m.id}</span>
            <span class="method-tag meta">${m.time} · ${m.evidence}</span>
          </div>
          <div class="method-name">${escHtml(m.name)}</div>
          <div class="method-desc">${escHtml(m.description)}</div>
          <div class="method-tags">
            ${m.risk.map(r => `<span class="method-tag risk" style="background:${RISK_COLORS[r]}">${RISK_NAMES[r]}</span>`).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;

  // Highlight active cell
  $$('.matrix-cell').forEach(c => c.classList.remove('active'));
  const activeCell = $(`.matrix-cell[data-risk="${risk.key}"][data-stage="${stage}"]`);
  if (activeCell) activeCell.classList.add('active');

  detail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ==========================================
// COMPARE
// ==========================================
function initCompare() {
  const selA = $('#compare-a');
  const selB = $('#compare-b');

  DATA.methods.forEach(m => {
    const opt = `<option value="${m.id}">${m.id}: ${m.name}</option>`;
    selA.innerHTML += opt;
    selB.innerHTML += opt;
  });

  const update = () => {
    const a = selA.value;
    const b = selB.value;
    if (a && b && a !== b) renderComparison(a, b);
  };
  selA.onchange = update;
  selB.onchange = update;
}

function renderComparison(idA, idB) {
  const a = getMethod(idA);
  const b = getMethod(idB);
  if (!a || !b) return;

  const result = $('#compare-result');
  result.classList.remove('hidden');

  function renderCompareCard(m) {
    return `
      <div class="compare-card">
        <h3 style="cursor:pointer" onclick="openMethodDetail('${m.id}')">${m.id}: ${escHtml(m.name)}</h3>
        <div class="compare-field"><span class="compare-label">Risk</span><span class="compare-value">${m.risk.map(r => RISK_NAMES[r]).join(', ')}</span></div>
        <div class="compare-field"><span class="compare-label">Stage</span><span class="compare-value">${m.stage.join(', ')}</span></div>
        <div class="compare-field"><span class="compare-label">Time</span><span class="compare-value">${m.time}</span></div>
        <div class="compare-field"><span class="compare-label">Cost</span><span class="compare-value">${m.costLevel}</span></div>
        <div class="compare-field"><span class="compare-label">Effort</span><span class="compare-value">${m.effort}</span></div>
        <div class="compare-field"><span class="compare-label">Evidence</span><span class="compare-value">${m.evidence}</span></div>
        <div class="compare-field"><span class="compare-label">User Access</span><span class="compare-value">${m.userAccess}</span></div>
        <div class="compare-field"><span class="compare-label">Business Model</span><span class="compare-value">${m.businessModel}</span></div>
        <div class="compare-section">
          <h4>When to Use</h4>
          <p>${escHtml(m.whenToUse)}</p>
        </div>
        <div class="compare-section">
          <h4>When NOT to Use</h4>
          <p>${escHtml(m.whenNotToUse)}</p>
        </div>
        ${m.karaokeCheck ? `
        <div class="compare-section">
          <div class="karaoke-warning"><h4 style="color:#92400e">Karaoke Check</h4><p>${escHtml(m.karaokeCheck)}</p></div>
        </div>` : ''}
      </div>
    `;
  }

  result.innerHTML = renderCompareCard(a) + renderCompareCard(b);
}

// ==========================================
// DIAGNOSE
// ==========================================
function initDiagnose() {
  const quiz = $('#diagnostic-quiz');
  const labels = ['0 — Never', '1 — Rarely', '2 — Sometimes', '3 — Always'];

  let html = '';
  DATA.diagnosticQuestions.forEach((q, i) => {
    html += `
      <div class="quiz-question">
        <div class="quiz-question-text">${i + 1}. ${escHtml(q)}</div>
        <div class="quiz-options">
          ${labels.map((label, score) => `
            <span class="quiz-option" data-q="${i}" data-score="${score}" onclick="selectQuizOption(this)">${label}</span>
          `).join('')}
        </div>
      </div>`;
  });
  html += `<div class="quiz-submit"><button class="btn btn-primary" onclick="submitDiagnostic()">Get My Score</button></div>`;
  quiz.innerHTML = html;
}

function selectQuizOption(el) {
  const q = el.dataset.q;
  // Deselect siblings
  el.parentElement.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
  state.quizAnswers[q] = parseInt(el.dataset.score);
}

function submitDiagnostic() {
  const total = DATA.diagnosticQuestions.length;
  const answered = Object.keys(state.quizAnswers).length;
  if (answered < total) {
    alert(`Please answer all ${total} questions. You've answered ${answered}.`);
    return;
  }

  const score = Object.values(state.quizAnswers).reduce((a, b) => a + b, 0);
  const max = total * 3;

  let band, bandClass, interpretation;
  if (score <= 6) {
    band = 'Deliberate Discovery'; bandClass = 'band-deliberate';
    interpretation = "You're matching methods to risks. Keep it up. Watch for creeping defaults over time.";
  } else if (score <= 12) {
    band = 'Mild Karaoke'; bandClass = 'band-mild';
    interpretation = "Some defaults are creeping in. Review your method selection for the areas you scored highest.";
  } else if (score <= 18) {
    band = 'Significant Karaoke'; bandClass = 'band-significant';
    interpretation = "Time to rebuild your risk-to-method mapping. Your process has become the default.";
  } else {
    band = 'Full Karaoke'; bandClass = 'band-full';
    interpretation = "Your discovery process needs a fundamental rethink. Start with the recovery exercise below.";
  }

  // Find top anti-patterns (highest-scoring questions)
  const sorted = Object.entries(state.quizAnswers)
    .sort((a, b) => b[1] - a[1])
    .filter(([, v]) => v >= 2)
    .slice(0, 3);

  const antiPatternMap = [
    'The Interview Reflex', 'The Static Playbook', 'Method Selection Gap',
    'The Interview Reflex', 'Confirmation Bias', 'Compliance Blind Spot',
    'Evidence Threshold Mismatch', 'Research Procrastination'
  ];

  const result = $('#diagnostic-result');
  result.classList.remove('hidden');
  result.innerHTML = `
    <div class="score-display">
      <div class="score-number">${score}<span class="score-max"> / ${max}</span></div>
      <div><span class="score-band ${bandClass}">${band}</span></div>
      <p style="margin-top:1rem;color:var(--text-secondary)">${interpretation}</p>
    </div>
    ${sorted.length > 0 ? `
    <div style="margin-top:1.5rem">
      <h3 style="margin-bottom:0.75rem">Your Top Patterns to Watch</h3>
      ${sorted.map(([qi, score]) => `
        <div class="karaoke-warning" style="margin-bottom:0.5rem">
          <h4 style="color:#92400e">${antiPatternMap[qi] || 'Pattern ' + (parseInt(qi) + 1)} (scored ${score}/3)</h4>
          <p>${DATA.diagnosticQuestions[qi]}</p>
        </div>
      `).join('')}
    </div>` : ''}
    <div style="margin-top:1.5rem;padding-top:1rem;border-top:1px solid var(--border)">
      <h3>30-Minute Recovery Exercise</h3>
      <ol style="margin-top:0.5rem;padding-left:1.5rem;color:var(--text-secondary);line-height:2">
        <li>List your current bets (features, products, initiatives)</li>
        <li>For each bet, name the primary risk</li>
        <li>For each bet, name the stage (Explore / Validate / Optimize)</li>
        <li>For each bet, name the method you're using</li>
        <li>Check: Does the method match the risk and stage?</li>
        <li>If default: Use the <a href="#" onclick="switchTab('matrix');return false" style="color:var(--brand-accent)">Matrix</a> to find alternatives</li>
      </ol>
    </div>
  `;
  result.scrollIntoView({ behavior: 'smooth' });
}

// ==========================================
// METHOD / TOOL DETAIL MODAL
// ==========================================
function openMethodDetail(id) {
  const m = getMethod(id);
  if (!m) return;

  const body = $('#modal-body');
  body.innerHTML = `
    <div class="detail-header">
      <span class="detail-id">${m.id} · ${m.category.toUpperCase()}</span>
      <h2 class="detail-name">${escHtml(m.name)}</h2>
      <p class="detail-desc">${escHtml(m.description)}</p>
    </div>
    <div class="method-tags" style="margin:0.75rem 0">
      ${m.risk.map(r => riskPill(r)).join('')}
      ${m.stage.map(s => `<span class="stage-tag ${s.toLowerCase()}" style="font-size:0.75rem">${s}</span>`).join('')}
    </div>
    <div class="detail-meta">
      <div class="detail-meta-item"><div class="detail-meta-label">Time</div>${m.time}</div>
      <div class="detail-meta-item"><div class="detail-meta-label">Cost</div>${m.costLevel}</div>
      <div class="detail-meta-item"><div class="detail-meta-label">Effort</div>${m.effort}</div>
      <div class="detail-meta-item"><div class="detail-meta-label">Evidence</div>${m.evidence}</div>
      <div class="detail-meta-item"><div class="detail-meta-label">User Access</div>${m.userAccess}</div>
      <div class="detail-meta-item"><div class="detail-meta-label">Business Model</div>${m.businessModel}</div>
      <div class="detail-meta-item"><div class="detail-meta-label">Company Size</div>${m.companySize}</div>
      <div class="detail-meta-item"><div class="detail-meta-label">Team Size</div>${m.teamSize}</div>
      <div class="detail-meta-item"><div class="detail-meta-label">Customer Base</div>${m.customerBase}</div>
    </div>
    ${m.whenToUse ? `<div class="detail-section"><h4>When to Use</h4><p>${escHtml(m.whenToUse)}</p></div>` : ''}
    ${m.whenNotToUse ? `<div class="detail-section"><h4>When NOT to Use</h4><p>${escHtml(m.whenNotToUse)}</p></div>` : ''}
    ${m.karaokeCheck ? `<div class="detail-section"><h4>Karaoke Check</h4><div class="karaoke-warning"><p>${escHtml(m.karaokeCheck)}</p></div></div>` : ''}
    ${m.companionTools ? `<div class="detail-section"><h4>Companion Tools (Layer 2)</h4><p>${escHtml(m.companionTools)}</p></div>` : ''}
    <div style="margin-top:1.5rem;text-align:center">
      <em style="color:var(--text-muted);font-size:0.82rem">Framework: The Thinking Lens — the-thinking-lens.com</em>
    </div>
  `;
  $('#method-modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function openToolDetail(id) {
  const t = getTool(id);
  if (!t) return;

  const catLabels = {
    framework: 'Framework', synthesis: 'Synthesis Tool',
    prioritization: 'Prioritization', 'operating-practice': 'Operating Practice'
  };

  const body = $('#modal-body');
  body.innerHTML = `
    <div class="detail-header">
      <span class="detail-id">${t.id} · LAYER 2 · ${(catLabels[t.category] || t.category).toUpperCase()}</span>
      <h2 class="detail-name">${escHtml(t.name)}</h2>
      <p class="detail-desc">${escHtml(t.description)}</p>
    </div>
    <div style="margin:1rem 0;padding:0.75rem 1rem;background:var(--brand-light);border-radius:var(--radius);font-size:0.85rem;color:var(--text-secondary)">
      Layer 2 tools structure thinking. They are companions to Layer 1 methods, not standalone discovery activities.
    </div>
    ${t.whenToSuggest ? `<div class="detail-section"><h4>When to Suggest</h4><p>${escHtml(t.whenToSuggest)}</p></div>` : ''}
    ${t.whenNotToSuggest ? `<div class="detail-section"><h4>When NOT to Suggest</h4><p>${escHtml(t.whenNotToSuggest)}</p></div>` : ''}
    ${t.karaokeWarning ? `<div class="detail-section"><h4>Karaoke Warning</h4><div class="karaoke-warning"><p>${escHtml(t.karaokeWarning)}</p></div></div>` : ''}
    <div style="margin-top:1.5rem;text-align:center">
      <em style="color:var(--text-muted);font-size:0.82rem">Framework: The Thinking Lens — the-thinking-lens.com</em>
    </div>
  `;
  $('#method-modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  $('#method-modal').classList.add('hidden');
  document.body.style.overflow = '';
}

// Close modal on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});
