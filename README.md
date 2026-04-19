# Discovery Karaoke Prevention Engine

> **Discovery Karaoke** = running the same familiar research methods out of habit instead of matching them to your actual risk.
> Default ≠ Deliberate. Familiar ≠ Fit-for-purpose.

**Live app:** [discovery.the-thinking-lens.com](https://discovery.the-thinking-lens.com)

A web tool for product teams to stop doing Discovery Karaoke — by matching the right discovery method to the right risk, at the right stage.

## What It Does

Given a risk and stage, the tool surfaces the right discovery methods — not a laundry list, but the right ones for your context. Built around the framework: **Risk → Stage → Method → Evidence**.

- **Find a Method** — filter by risk, stage, category, and constraints; guided wizard for step-by-step recommendations
- **Diagnose** — 12-question interactive scorecard to identify karaoke patterns in your practice
- **Reference** — full sortable/filterable table of all 80 entries (69 methods + 11 context tools)
- **Method Matrix** — 5 risks × 3 stages, top methods per cell, clickable

## The Framework

**Five discovery risks** — every method maps to one or more:

| Risk | Core Question |
|------|--------------|
| Value / Desirability | Will customers buy or use this? |
| Usability | Can users figure it out? |
| Feasibility | Can we build it? |
| Viability | Does it work for the business? |
| Compliance & Ethics | Is it legal, ethical, and responsible? |

**Three discovery stages:**

- **Explore** — understand the problem space
- **Validate** — test solutions
- **Optimize** — improve what's live

## The Toolkit

**69 discovery methods** across three tiers (Core, Extended, Specialist) + **11 context tools** — frameworks and synthesis companions that structure thinking rather than generate primary evidence.

Categories: Generative, Evaluative, Experimentation, Analytics, Compliance & Ethics.

Each method includes: risk tags, stage, effort/time/cost, evidence strength, when to use, when NOT to use, and an AI augmentation note.

## Tech

Static single-page app. No backend, no dependencies, no build step. HTML + CSS + vanilla JS.

- `index.html` — structure
- `style.css` — styles (Nunito font, CSS custom properties)
- `app.js` — all UI logic
- `data.js` — generated from source database; do not edit directly
- `data/` — source database (Markdown): methods, matrix, anti-patterns
- `tools/` — Python parser (`parse_data.py`) that generates `data.js` from source

To regenerate `data.js` after editing the source database:

```bash
cd tools
python parse_data.py
```

Tests:

```bash
cd "Skill-Discovery Karaoke"
pytest tools/test_compact.py -v
pytest tools/test_extended.py -v
```

## Credits

Framework: Amodiovalerio Verde — "Stop Doing Discovery Karaoke", [The Thinking Lens](https://www.the-thinking-lens.com/) (June 2025).

Methods sourced from established product discovery literature: Teresa Torres, Marty Cagan, Jake Knapp, Jeff Gothelf, Erika Hall, and others.

## License

[CC BY-NC 4.0](LICENSE) — free to use, share, and adapt with attribution to Amodiovalerio Verde / The Thinking Lens. Commercial use prohibited.
