/* Using ...props to collect all additional props and forward them to the button element */
export default function TabButton({ children, isSelected, ...props }) {
  console.log('TABBUTTON COMPONENT EXECUTING');
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}

/*
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
*/

/* Use props.children to get the children prop */
/* In this case, it's just some text: <TabButton>Components</TabButton> */
/*
export default function TabButton(prop) {
  //Simple click handler that logs "Hello World!" to the console
  function handleClick() {
    console.log('Hello World!');
  }

  return (
    <li>
      <button onClick={handleClick}>{prop.children}</button>
    </li>
  );
}
*/

/* Use destructuring to get children prop 
export default function TabButton({ children }) {
  return (
    <li>
      <button>{children}</button>
    </li>
  );
}
*/