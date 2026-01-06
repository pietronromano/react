/*
  children: The content to be displayed inside the button.
    SEE: https://react.dev/learn/passing-props-to-a-component#step-2-read-props-inside-the-child-component
  className: Additional CSS classes to style the button.
  disabled: A boolean indicating whether the button is disabled.
  onClick: A function to be called when the button is clicked.
*/

const Button = ({ children, className, disabled, onClick }) => {
  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
