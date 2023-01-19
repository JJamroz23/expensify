import { onAuthStateChanged } from "firebase/auth";
import ReactDOM from "react-dom/client";
import App from "./App";
import { login, logout } from "./store/slices/user/authSlice";
import { store } from "./store/store";
import { auth } from "./utils/firebase";
import "react-day-picker/dist/style.css";
import Loader from "./components/loader/Loader";
import './i18n';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

let checked = false;

root.render(<Loader />);

const renderApp = () => {
  if (!checked) {
    root.render(<App />);
    checked = true;
  }
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    store.dispatch(
      login({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
      })
    );

    renderApp();
  } else {
    store.dispatch(logout());
    renderApp();
  }
});
