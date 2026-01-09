# React
Uber repo with courses and examples of React projects.


## Important references:
- https://react.dev/ : main react site, excellent documentation
  - https://react.dev/reference/rules: Fundamental Rules of React
  - https://react.dev/learn/reacting-to-input-with-state: Reacting to input with state
- https://developer.mozilla.org/en-US/: mdn Web docs for HTML, CSS...
- https://javascript.info/: Knowing Javascript, including object destructuring, ... Rest Params / Spread Syntax, etc, are vital pre-requisites

---

## Environment Setup
See Brad Traversy's course for detailed setup instructions:
- https://www.udemy.com/course/modern-react-from-the-beginning/learn/lecture/51256463#overview

### Macos Commandline: 
- Change prompt to just show working directory:
PS1='%1~ $ '

---

### Install tools
#### nodejs: 
- https://nodejs.org/en/download
  
---

#### React Developer Tools browser extension: 
- https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
- Installs the `Components` and `Profile` tabs in Developer Tools:
- `Components`: View the component tree, props, hooks and link to source
- `Profile`: Allow recording interactions and then analyzing component tree updates   

---

#### VS Code: Run selected text in Active Terminal
To Configure:
- CTRL|CMD+SHIFT+P
  - Type "Preferences: Run Selected Text in Active Terminal"
  - Click on the Configuration icon
  - Remove other associated Keys
  - Press Keys: e.g. CTRL+E (Windows) or CMD+SHIFT+E (MAC), 


#### VS Code extensions:
- *Simple React Snippets*:
  - e.g.: sfc + tab  => creates a functional component boilerplate
  - See here for full list of shortcuts: https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets
- *JavaScript (ES6) code snippets*
- *DotENV* - support for .env files
- *Postman* - the famous API testing tool, integrated into VS Code
- *Prettier* - Code formatter
  - OPTIONAL! I found it inteferred with my comments - disabled it
  - Configure Prettier to format on save: Go to VS Code settings and search for:
      - "Format On Save" and enable it.
      - "Default Formatter" and set it to "Prettier - Code formatter".
- *Markdown Preview Enhanced*
- *Markdown All in One* 

---

## Creating a new react project with Vite
- Option 1: Be asked for options:
`npm create vite@latest'

- Option 2: Create directly a React project with JavaScript:
`npm create vite@latest first-app -- --template react`

- Results:
    - Creates full project structure
    - Starts Vite Server
    - NOTE: `npm install` is NOT needed initially, dependencies installed automatically
        - BUT: If starting from downloaded code from GitHub, DO need `npm install`

### Vite commands
- `h` + `enter` for help
- `r` + `enter` to restart the server
- `u` + `enter` to show server url
- `o` + `enter` to open in browser
- `c` + `enter` to clear console
- `q` + `enter` to quit

### Restart vite in dev mode after quitting
npm run dev

---

## Debugging
### Debug in Browser
- Inspect -> Sources -> [Choose the source file version in *Italics*]

### StrictMode
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


