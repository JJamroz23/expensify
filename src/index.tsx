import { onAuthStateChanged } from "firebase/auth";
import ReactDOM from "react-dom/client";
import App from "./App";
import { login, logout } from "./store/slices/user/authSlice";
import { store } from "./store/store";
import { auth } from "./utils/firebase";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);

// FIXME: type
onAuthStateChanged(auth, (user: any) => {
  if (user) {
    store.dispatch(
      login({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
      })
    );
  } else {
    store.dispatch(logout());
  }
});
