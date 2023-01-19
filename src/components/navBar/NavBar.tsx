import { Link, useNavigate } from "react-router-dom";
import { signOutUser } from "../../utils/firebase/auth";
import {
  AppBarContainer,
  Expensify,
  NavButton,
  WidthContainer,
} from "./navBar.styles";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { selectUser, logout } from "../../store/slices/user/authSlice";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const userSelector = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const navigate = useNavigate();
  const dashnav = () => {
    navigate("/dashboard");
  };

  const logOutOfApp = () => {
    dispatch(logout());
    signOutUser();
  };

  return (
    <AppBarContainer>
      <WidthContainer>
        <Expensify onClick={dashnav}>Expensify</Expensify>
        <Link to="/">
          {userSelector ? (
            <NavButton onClick={logOutOfApp}>{t("navbar.out")}</NavButton>
          ) : (
            <NavButton>{t("navbar.in")}</NavButton>
          )}
        </Link>
      </WidthContainer>
    </AppBarContainer>
  );
};

export default NavBar;
