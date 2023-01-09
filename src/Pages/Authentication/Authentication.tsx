import {
  Layout,
  LayoutBox,
  LayoutHeader,
  Button,
} from "./Authentication.styles";
const Authentication = () => {
  return (
    <Layout>
      <LayoutBox>
        <LayoutHeader>Expensify</LayoutHeader>
        <p>It's time to login to your expensify app</p>
        <Button>Login</Button>
      </LayoutBox>
    </Layout>
  );
};

export default Authentication;
