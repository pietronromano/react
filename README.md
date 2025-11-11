# react
Examples of react projects
Based on:
- Course: https://www.udemy.com/course/react-the-complete-guide-incl-redux
- Source: https://github.com/academind/react-complete-guide-course-resources
- Docs: react-course-slides.pdf, next-gen-js-summary.pdf

- NOTE: Course completed up to and including Section 7, Debugging.

Other important references:
- https://react.dev/ : main react site, excellent documentation
- https://developer.mozilla.org/en-US/: mdn Web docs for HTML, CSS...
- https://javascript.info/: Knowing Javascript, including object destructuring, ... Rest etc, is a vital pre-requisite

---

# Setup

## Macos Commandline: 
- Change prompt to just show working directory:
PS1='%1~ $ '

## Install tools
- nodejs: 
  - https://nodejs.org/en/download
  

- React Developer Tools browser extension: 
  - https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
  - Installs the `Components` and `Profile` tabs in Developer Tools:
    - `Components`: View the component tree, props, hooks and link to source
    - `Profile`: Allow recording interactions and then analyzing component tree updates   


- VS Code extensions:
  - Markdown Preview Enhanced
  - Markdown All in One 

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

# Debugging
## Debug in Browser
- Inspect -> Sources -> [Choose the source file version in *Italics*]

## StrictMode
- SEE: https://react.dev/reference/react/StrictMode
- Wrap `<App>` in StrictMode:
- Original:
```javascript
    ReactDOM.createRoot(entryPoint).render(<App />);
```

- With StrictMode:
```javascript
    const root = createRoot(document.getElementById('root'));
    root.render(
    <StrictMode>
        <App />
    </StrictMode>
    );
```


