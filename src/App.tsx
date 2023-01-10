import React from "react";
import { GlobalStyle } from "./globalStyles";
import AppRouter from "./Routes/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <AppRouter />
          <GlobalStyle />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
};

export default App;
