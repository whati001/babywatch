
# Babywatch

Babywatch is the tiny baby camera that goes wherever your baby goes.

Magnetically mount it to a stroller, crib, or travel cot and stream video directly to your smartphone - no separate monitor, no shared Wi-Fi, no complicated setup. With a direct BLE connection, babywatch keeps things simple, private, and portable.

Whether you're at home, visiting family, or out for a walk, babywatch helps you keep an eye on your little one from the device already in your pocket.

Babywatch - peace of mind, always within reach.


## Tech stack

Babywatch is a Vite + React landing page project generated from a Figma design.

Original design source:
https://www.figma.com/design/LoMgyC5NqBCCb62g3XHm3l/Babywatch

- Vite 6
- React 18
- TypeScript (TSX source files)
- Tailwind CSS 4
- Radix UI primitives + custom UI components

## Prerequisites

- Node.js 18+ (Node.js 20 LTS recommended)
- npm (or pnpm)

## Getting started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the local URL shown in the terminal (typically `http://localhost:5173`).

## Available scripts

- `npm run dev`: Start the Vite dev server.
- `npm run build`: Create a production build.

## Project structure

```text
src/
  main.tsx                 # App entry point
  app/
    App.tsx                # Main page composition
    components/            # Page sections and reusable UI
    context/               # React context providers
    hooks/                 # Custom React hooks
  styles/                  # Global, theme, and utility styles
```

## Notes

- A `pnpm-workspace.yaml` is included, so you can also use pnpm if preferred:

```bash
pnpm install
pnpm dev
```

- Attribution information is available in `ATTRIBUTIONS.md`.
