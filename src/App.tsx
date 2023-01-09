import React from "react";
import { GlobalStyle } from "./globalStyles";
import AppRouter from "./Routes/AppRouter";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <AppRouter />
        <GlobalStyle />
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
