// ButtonsContainer defaults to a 'menu' element
export default function Tabs({ children, buttons, ButtonsContainer = 'menu' }) {
  //If we want to use a local variable, it must begin with a capital letter
  // const ButtonsContainer = buttonsContainer;
  
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
