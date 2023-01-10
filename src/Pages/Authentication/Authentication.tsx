import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { login, logout, selectUser } from "../../store/features/user/userSlice";
import {
  authStateChangeListener,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/auth";
import {
  Layout,
  LayoutBox,
  LayoutHeader,
  Button,
} from "./Authentication.styles";
import { useEffect } from "react";

const Authentication = () => {
  const userSelector = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    authStateChangeListener(async (user) => {
      if (user) {
        dispatch(login(await createUserDocumentFromAuth(user)));
      } else {
        dispatch(logout());
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  return (
    <Layout>
      <LayoutBox>
        <LayoutHeader>Expensify</LayoutHeader>
        <p>It's time to login to your expensify app</p>
        <Button onClick={signInWithGoogle}>Login</Button>
      </LayoutBox>
    </Layout>
  );
};

export default Authentication;
