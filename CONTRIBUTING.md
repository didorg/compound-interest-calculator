## Contributing Guide

Thank you for considering a contribution! This guide helps you get productive quickly and outlines the project’s expectations.

### Ways to Contribute
- Report bugs and issues
- Propose and implement features
- Improve documentation and examples

### Development Setup
1. Fork the repository and create your branch from `main`.
2. Install dependencies: `npm install`
3. Start the dev server: `npm run dev`
4. Make changes in small, focused commits.
5. Run lint checks: `npm run lint`
6. Build locally to verify production output: `npm run build`

### Commit Messages
- Use clear, descriptive messages (e.g., "feat: add quarterly compounding", "fix: handle zero contributions").
- Reference related issues when applicable (e.g., `Fixes #123`).

### Coding Standards
- Use TypeScript and keep types accurate in `src/types/*`.
- Keep UI changes accessible and responsive.
- Prefer pure, well-tested functions in `src/utils/*` for logic.
- Keep components small and focused.

### Pull Requests
- Follow the PR template.
- Include screenshots or clips for UI changes when helpful.
- Add or update documentation for changed behavior.
- Keep PRs scoped and small where possible.

### Issue Reporting
When reporting a bug, please include:
- Environment details (OS, Node version, browser)
- Steps to reproduce
- Expected vs. actual behavior
- Screenshots or console errors if available

### Release and Changelog
We follow semantic versioning when versions are tagged. Maintain human-readable notes in `CHANGELOG.md` (if present) for notable changes.

### Contact
For questions, open an issue or discussion. For conduct-related concerns, see `CODE_OF_CONDUCT.md`.

Thanks for helping make this project better!

