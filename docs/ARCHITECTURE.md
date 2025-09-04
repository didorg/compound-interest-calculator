# Architecture Overview

This project is a small React + TypeScript single-page app built with Vite and styled with Tailwind CSS. Chart.js renders the growth chart.

## High-Level Structure

- `src/App.tsx`: Holds app state, wires form inputs to calculation results.
- `src/components/CalculatorForm.tsx`: Controlled inputs for savings assumptions.
- `src/components/ResultsDashboard.tsx`: KPIs and chart container.
- `src/components/GrowthChart.tsx`: Chart.js configuration and rendering via `react-chartjs-2`.
- `src/utils/calculations.ts`: Core financial math and currency formatter.
- `src/types/calculator.ts`: TypeScript types for inputs and outputs.

## Data Flow

1. User updates form fields in `CalculatorForm`.
2. `App` maintains `inputs` and triggers `calculateCompoundInterest`.
3. `ResultsDashboard` receives `CalculationResult` and displays KPIs + chart.

## Styling

- Tailwind utility classes are used throughout components.
- Global Tailwind configuration lives in `tailwind.config.js` and `src/index.css`.

## Charting

- Line chart implemented with Chart.js v4 through `react-chartjs-2`.
- Options configured for tooltips, axes labels, and responsive behavior.

## Notes on Calculations

- Current model calculates interest annually and aggregates contributions yearly.
- See `docs/FORMULA.md` for the formula and planned improvements (e.g., monthly/quarterly compounding).

