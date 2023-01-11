import { selectUser } from "../store/slices/user/authSlice";
import { useAppSelector } from "./hooks";

const useIsLoggedIn = () => {
  const user = useAppSelector(selectUser);
  return !!user;
};

export default useIsLoggedIn;
