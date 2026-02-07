import type { Route } from "./+types/index";


// Override the meta function defined in root.tsx to set a custom title for the home page
export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev: Home" },
    { name: "description", content: "Custom website development" },
  ];
}

const Home = () => {
  const now = new Date().toISOString();
  if (typeof window === 'undefined') {
    // If the window object is not defined, it means that we are on the server because there is no window object in a server environment.
    // If we change the ssr option in the react-router.config.ts file to false, this block will not run during server rendering. 
    console.log('🖥️ Server Render at:', now);
  } else {
    //If it is defined, it means that we are on the client.
    console.log('🧠 Client Hydration at:', now);
  }
  return (
    <section>
      <h1>My App</h1>
    </section>
  );
};

export default Home;
