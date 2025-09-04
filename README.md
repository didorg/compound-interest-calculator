# Compound Interest Calculator

An interactive compound interest calculator built with React, TypeScript, Vite, Tailwind CSS, and Chart.js. Enter your savings, rate of return, and contributions to visualize projected growth over time.

This project is intended as a lightweight, modern starter for financial calculators with a clean UI and extendable utility functions.

## Features
- Fast React + TypeScript app scaffolded with Vite
- Tailwind CSS for utility‑first styling
- Interactive line chart via Chart.js (`react-chartjs-2`)
- Real‑time calculation updates and a clear results dashboard
- Supports monthly or yearly contributions
- Year‑by‑year breakdown and totals

Note: The current implementation compounds annually for growth calculations. The UI exposes a compounding frequency selector which can be wired up in a future enhancement.

## Demo
Run locally using the instructions below. You can easily deploy to Netlify, Vercel, or GitHub Pages.

## Documentation
- Docs Index: `docs/README.md`
- Contributing: `docs/CONTRIBUTING.md`
- Security: `docs/SECURITY.md`
- Deployment: `docs/DEPLOYMENT.md`
- Architecture: `docs/ARCHITECTURE.md`
- Calculation Notes: `docs/FORMULA.md`

## Getting Started

### Prerequisites
- Node.js 18+ and npm 9+

### Install
```bash
npm install
```

### Run (Development)
```bash
npm run dev
```
Vite serves the app and provides hot module reloading. Open the printed local URL (typically `http://localhost:5173`).

### Build
```bash
npm run build
```
Outputs a production build to `dist/`.

### Preview Production Build
```bash
npm run preview
```

## Usage
1. Current savings: how much you already have.
2. Years to save: the time horizon of the projection.
3. Rate of return: expected average annual return (percentage).
4. Extra contribution: amount you plan to add periodically.
5. Contribution frequency: monthly or yearly.
6. Compounding frequency: currently shown in the UI; compounding is annual in the current implementation.

Click “Calculate” to update results. The right panel shows:
- Estimated final amount
- Total contributed (including initial savings)
- Total interest earned
- A yearly growth chart and breakdown

## Project Structure
- `src/App.tsx`: App composition and state management
- `src/components/CalculatorForm.tsx`: Form inputs and interactions
- `src/components/ResultsDashboard.tsx`: KPIs and chart layout
- `src/components/GrowthChart.tsx`: Chart.js configuration and rendering
- `src/utils/calculations.ts`: Core calculation logic and currency formatting
- `src/types/calculator.ts`: TypeScript interfaces for inputs/results

## Development
- Type checking: TypeScript
- Linting: ESLint (`npm run lint`)
- Styling: Tailwind CSS configured via `tailwind.config.js`
- Charts: Chart.js via `react-chartjs-2`

### Suggested Enhancements
- Implement compounding frequency periods (monthly/quarterly)
- Add tests for calculation utilities
- Add persistence (e.g., URL params or localStorage)
- Add i18n and currency selection
- Export results to CSV/PNG

## Contributing
Contributions are welcome! Please read `CONTRIBUTING.md` and follow the pull request template. By participating, you agree to the project `CODE_OF_CONDUCT.md`.

## Security
Please see `SECURITY.md` for how to report vulnerabilities responsibly.

## License
No license has been declared yet. By default, this means all rights are reserved. If you intend to make this project broadly reusable, consider adding a license such as MIT, Apache‑2.0, or GPL‑3.0.

## Acknowledgements
- React, Vite, TypeScript, Tailwind CSS
- Chart.js and react-chartjs-2
