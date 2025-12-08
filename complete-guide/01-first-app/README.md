# 01-FIRST-APP

---

# Create a new react project with Vite
- Be asked for options:
`npm create vite@latest'

- React with javascript:
`npm create vite@latest first-app -- --template react`

- Results:
    - Creates full project structure
    - Starts Vite Server
    - NOTE: `npm install` is NOT needed initially, done automatically
        - BUT: If starting from downloaded code from GitHub, DO need `npm install`

## Vite commands
- `h` + `enter` for help
- `r` + `enter` to restart the server
- `u` + `enter` to show server url
- `o` + `enter` to open in browser
- `c` + `enter` to clear console
- `q` + `enter` to quit

## Restart vite in dev mode after quitting
npm run dev

---

# [ORIGINAL README]: React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
