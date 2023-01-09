import React from "react";
import NavBar from "./components/navBar/NavBar";

import { GlobalStyle } from "./globalStyles";

const App = () => {
  return (
    <React.StrictMode>
      <NavBar />
      <GlobalStyle />
    </React.StrictMode>
  );
};

export default App;
