# 23. Vite Build Tool Setup
SEE: `docs/03-react-fundamentals/04-vite-build-tool-setup.md`

Create a new React app and start a development server using Vite by running the following commands:
```bash
cd my-modern-react/lessons/03-fundamentals/23-vite
npx create-vite@latest rating-ui
```

This will create a new directory called `rating-ui` with a new React app inside it.
You will be prompted for a few questions. Here is how I answered them:
- Choose a framework: `react`
- Choose a variant: You can use TypeScript if you want. We will explore TypeScript later in the course. For now, I am going to choose `JavaScript`.

To run in development mode:
```bash
cd rating-ui
npm run dev
```

If cloning the repository, run the following command to install the dependencies:
```bash
cd rating-ui
npm install
```