import { useState } from "react";
import { signInWithGooglePopup } from "../../utils/firebase/auth";
import {
  Button,
  Layout,
  LayoutBox,
  LayoutHeader,
} from "./Authentication.styles";

const Authentication = () => {
  const [isLoading, setIsLoading] = useState(false);
  const signInWithGoogle = () => {
    setIsLoading(true);
    signInWithGooglePopup();
  };

  return (
    <Layout>
      <LayoutBox>
        <LayoutHeader>Expensify</LayoutHeader>
        <p>It's time to login to your expensify app</p>
        {isLoading ? (
          <Button disabled>Login</Button>
        ) : (
          <Button onClick={signInWithGoogle}>Login</Button>
        )}
      </LayoutBox>
    </Layout>
  );
};

export default Authentication;
