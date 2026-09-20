# Portfolio design review

The original design has a recognizable starting point: charcoal, warm ivory, tomato red, serif typography, a red panda, and a personal, literary voice. The revision develops that identity into a more coherent portfolio.

## What needed improvement

- **Hierarchy:** similarly sized headings, repeated separators, and long quotations competed with the actual work. The opening needed a clear next action, and the projects deserved to appear sooner.
- **Project presentation:** long paragraphs and technology inventories made the work difficult to scan. Blank image props meant the project grid had little visual distinction.
- **Responsive layout:** fixed page padding, side-by-side education columns, and constrained skill lists caused squeezing and internal scrollbars on narrow screens.
- **Interactions:** 1.3× hover scaling was disruptive. The video cards were not keyboard controls, and their overlay lacked dialog semantics and focus management.
- **Content integrity:** the résumé URL had no corresponding file. Education dates and degree names were passed to a component that never rendered them. Two identical routes pointed at the homepage.

## What changed

- Kept the original #212121 background, #fff8f0 ivory, #e94f37 red, local serif fonts, and red panda photograph. Added a subtle grain, numbered section labels, fine rules, and an arched photographic composition.
- Created a clear hero with a work CTA, rotating roles, profile links, and a résumé-request email link. Existing portfolio statistics remain user-provided; the commit statistic is framed as a three-month stretch rather than a moving live total.
- Moved projects immediately after the introduction. All seven projects remain available through category filters and an expand/collapse control. Brief summaries lead; full technology lists are available in native disclosures.
- Added lightweight CSS project illustrations. These are decorative identity treatments, not screenshots or representations of working project interfaces.
- Replaced the endlessly moving video carousel with a manually controlled, swipeable gallery. Video buttons open a native modal dialog with Escape dismissal, focus containment, focus restoration, a close button, and a YouTube fallback link.
- Displayed education milestones on a desktop timeline that becomes a vertical timeline on phones. Skills now wrap into readable groups without nested scrollbars.
- Added section-aware navigation, a mobile menu, a skip link, visible keyboard focus, email-copy feedback, subtle reveal animations, and reduced-motion support.
- Consolidated the repeated quotations into one interlude and retained the closing values.

## Next content improvements

1. Add real screenshots or short recordings for the strongest projects. The current illustrations give the grid structure, but real product visuals would communicate more evidence.
2. Turn two or three projects into case studies: problem, personal contribution, constraints, tradeoffs, outcome, and what you learned. Do not rely on a technology list to explain the work.
3. Supply a current résumé PDF to restore a direct download. Until then, “Request résumé” opens an email instead of a broken file URL.
4. Add descriptive titles and credits for the animation clips. The source only provided video IDs and generic numbered titles, so the redesign does not invent production credits.
5. Review the project counts, commit totals, freelance reach, and education status before publishing. These come from the existing site, not an independently verified source.

## Running locally

Use `npm run dev` for the Vite development server, `npm run build` for the production bundle, and `npm run lint` for Oxlint. Project records live in `src/data/projects.js`; design tokens and responsive rules live in `src/index.css`.
