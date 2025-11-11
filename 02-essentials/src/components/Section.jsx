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
