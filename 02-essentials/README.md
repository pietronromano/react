# 02-Essentials:

**Contents**:
- Properties: see CoreConcept.jsx, with versions with and without destructuring
- Import img 
- Components in own folder: see (Header)
- Events, Conditional rendering
- State
- Dynamic Lists


**SOURCES**: 
  - 03 React Essentials:
      - 08-styles-next-to-cmp to 18-outputting-list-data



# Usage:
- Regenerate the node_modules folder according to dependencies in package.json: 
```bash
cd 02-props-cmps
npm install
```

- Start dev server
```bash
npm run dev
```

---

# Contents: Key learning points

## Properties 
- See: 
  - CoreConcept.jsx, with versions with and without destructuring
  - https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/39649022#overview


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

#### Components in own folder
- See Header: components/Header/Header.jsx, Header.css

---

### Events, Conditional Rendering
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

