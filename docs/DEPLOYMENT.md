# Deployment Guide

This app is a static Vite build and can be deployed to GitHub Pages, Vercel, Netlify, or any static host.

## GitHub Pages (project site)

1. Set Vite `base` to the repository name so asset paths work on `https://USERNAME.github.io/REPO/`.
   - File: `vite.config.ts`
   - Example for this repo: `base: '/compound-interest-calculator/'`
2. Ensure the GitHub Actions workflow exists: `.github/workflows/deploy.yml` (already included).
3. In GitHub → Settings → Pages, set Source to “GitHub Actions”.
4. Push to `main`. The workflow builds and deploys `dist/` to Pages.

Notes:
- If you deploy to a user/organization site at `https://USERNAME.github.io/`, you can keep `base: '/'`.
- When changing the repo name, update `base` accordingly.

## Vercel
- Import the repo into Vercel
- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

## Netlify
- New site from Git
- Build Command: `npm run build`
- Publish Directory: `dist`

## Local Preview
- `npm run preview` serves the production build locally.

