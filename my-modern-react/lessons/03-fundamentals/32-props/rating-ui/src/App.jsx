import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Rating from "./components/Rating";

function App() {
  return (
    <div>
      {/* Send a custom heading prop */}
      <Rating heading="Custom Rating" />
    </div>
  );
}

export default App;
