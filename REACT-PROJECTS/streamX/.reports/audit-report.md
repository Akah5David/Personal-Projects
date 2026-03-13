Audit report - Tailwind migration

Scanned files:
- src/index.css
- src/styles/header.module.css
- tailwind.config.js
- components: HomeHeader.jsx, Footer.jsx, Movies.jsx, NavBar.jsx, Modal.jsx, Form.jsx, Main.jsx
- other components: list available via grep for className usages

Findings:
- Many components used fixed pixel widths (px, w-[60px], h-[60px], etc.) and non-responsive grids (grid-cols-5).
- Several global utilities like scrollbar hiding and custom clip-paths present in index.css — moved to Tailwind utilities via @layer utilities.
- Header used large paddings and absolute positioning; converted to container-based responsive header with mobile toggle.
- Page-level wrappers used full-screen widths and fixed paddings — migrated to container and responsive spacing for hero sections.

Recommended next steps:
- Replace remaining fixed size classes with Tailwind responsive classes across all components (sm/md/lg).
- Add accessibility improvements to interactive elements (aria labels, focus-visible).
- Run visual QA on device widths: 360px, 412px, 768px, 1024px, 1440px.

