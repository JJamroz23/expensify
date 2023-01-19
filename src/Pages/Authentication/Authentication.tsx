import { useState } from "react";
import { useTranslation } from "react-i18next";
import { signInWithGooglePopup } from "../../utils/firebase/auth";
import {
  Button,
  Layout,
  LayoutBox,
  LayoutHeader,
} from "./Authentication.styles";

const Authentication = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();
  const signInWithGoogle = () => {
    setIsLoading(true);
    signInWithGooglePopup();
  };

  return (
    <Layout>
      <LayoutBox>
        <LayoutHeader>Expensify</LayoutHeader>
        <p>{t("auth.text")}</p>
        {isLoading ? (
          <Button disabled>{t("auth.in")}</Button>
        ) : (
          <Button onClick={signInWithGoogle}>{t("auth.in")}</Button>
        )}
      </LayoutBox>
    </Layout>
  );
};

export default Authentication;
