import type { Route } from "./+types/index";


// Override the meta function defined in root.tsx to set a custom title for the home page
export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev: Home" },
    { name: "description", content: "Custom website development" },
  ];
}

const Home = () => {
  console.log("Home component rendered");
  return (
    <section>
      <h1>My App</h1>
    </section>
  );
};

export default Home;
