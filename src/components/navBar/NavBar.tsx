import { Link } from "react-router-dom";
import { signOutUser } from "../../utils/firebase/auth";
import { AppBarContainer, Expensify, NavButton } from "./navBar.styles";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { selectUser, logout } from "../../store/features/user/userSlice";

const NavBar = () => {
  const userSelector = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const logOutOfApp = () => {
    dispatch(logout());
    signOutUser();
  };

  return (
    <AppBarContainer>
      <Expensify>Expensify</Expensify>
      <Link to="/">
        {userSelector ? (
          <NavButton onClick={logOutOfApp}>LOG OUT</NavButton>
        ) : (
          <NavButton>LOG IN</NavButton>
        )}
      </Link>
    </AppBarContainer>
  );
};

export default NavBar;
