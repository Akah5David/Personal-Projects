QA Checklist - Tailwind responsive migration

Manual checks:
- [ ] Homepage hero scales at 320/375/412/768/1024/1440 widths
- [ ] NavBar collapses into mobile menu under md breakpoint
- [ ] Movie grids reflow: 2 cols (mobile), 3 cols (sm), 4 cols (md), 5 cols (lg)
- [ ] Modals center and have accessible focus traps
- [ ] Forms inputs are at least 44px tall on touch devices
- [ ] Footer stacks into single column on small screens and multi-column on desktop
- [ ] Images use object-cover and maintain aspect ratio
- [ ] No horizontal overflow introduced

Automated checks:
- Run project dev server and Lighthouse mobile/desktop
- Run linter (npm/Yarn scripts) — already ran ReadLints (no errors)

Remediation notes:
- Footer still contains some fixed sizes; review and convert to container/padding utility (in progress).
- Replace any remaining inline colors with theme tokens if needed.

