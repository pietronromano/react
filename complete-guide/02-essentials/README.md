# 02-Essentials

## References
  - 03 React Essentials: 08-styles-next-to-cmp 
  ->  
  - 04 Essentials Deep Dive: 06-dynamic-component-types

---

# Usage
How to run the samples:
- Regenerate the node_modules folder according to dependencies in package.json: 
```bash
cd 02-essentials
npm install
```

- Start dev server:
```bash
npm run dev
```

---

# Key learning points

## Fragment
- Reference: https://react.dev/reference/react/Fragment 
- React components must have only one parent element, this gives an error:
```javascript
    function Summary({ text }) {
      return (
            <h1>Summary</h1>
            <p>{text}</p>
          );
    }
```

- But this creates an unnecessary element in the DOM (can affect css styling). 
- Can avoid by using `<Fragement>`, or more modern, with a shortcut empty tag:
```javascript
function Summary({ text }) {
  return (
      <>
        <h1>Summary</h1>
        <p>{text}</p>
      </>
      );
}
```

---

## Import img 
- SEE: https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/39649018#overview
- Before: literal string for src, can be lost in react bundling process for build & deployment, also cannot be optimized that way
- src/App.jsx
```javascript  
     <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" /> 
```

- Afer: special react feature:  import image file into a variable
- NOTE: DON'T add quotes around the {}
```javascript
    import reactImg from './assets/react-core-concepts.png';
    ...
    <header>
      <img src={reactImg} alt="Stylized atom" />
```

---

## Components in own folder
- Easier to manager
- References: Header.js: components/Header/Header.jsx, Header.css

---

## Props: basics 
- See: 
  - CoreConcept.jsx, with versions with and without destructuring
  - https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/39649022#overview


---

## Prop Forwarding
- Reference: https://javascript.info/rest-parameters-spread
- Props Are Not Forwarded Automatically to the jsx code inside of the component
- So we need to do it explicitly, with Javascript's Rest and Spread operators

- Section.jsx
```javascript
//...props: this is Javascript's "Rest properties" syntax, it merges all additional props into an array
export default function Section({ title, children, ...props }) {
  return (
    //...props here is Javascript's "Spread" operator, the opposite of "Rest"
    // It converts the array back into a list of props, forwarding them to the <section> element
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
```

---

## Multiple JSX Slots
- Tabs.jsx:
```javascript
  export default function Tabs({ children, buttons }) {
  return (
    <>
      <menu>{buttons}</menu>
      {children}
    </>
  );
}
```

---

## Setting Component Types Dynamically
- Built-in or Custom?
  - For built-in components: `buttonsContainer='menu'`
  - For custom react components `buttonsContainer='{MyComponent}'`
  
- Examples.jsx:
```javascript
     <Tabs
        ButtonsContainer="menu"
        buttons={
          <>
    ...
```

- Tabs.jsx:
```javascript
// ButtonsContainer defaults to a 'menu' element
export default function Tabs({ children, buttons, ButtonsContainer }) {
  //If we want to use a local variable, it must begin with a capital letter
  // const ButtonsContainer = buttonsContainer;
  
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
```

---


## Events, Conditional Rendering
- SEE: https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/39649204#overview
- TabButton.jsx

```javascript
export default function TabButton({ children, onSelect, isSelected }) {
  console.log('TABBUTTON COMPONENT EXECUTING');
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
```

---

## State
- SEE: 
  - 14-managing-state
  - https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/39649238#overview
  - https://react.dev/reference/react/useState

```javascript
function App() {
    //Must be at top level of component, without conditions or loops
    const [selectedTopic, setSelectedTopic] = useState();

```

---

## Dynamic Lists
- SEE: https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/39649260#overview

- App.jsx:
```javascript
    <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
     </section>
```

