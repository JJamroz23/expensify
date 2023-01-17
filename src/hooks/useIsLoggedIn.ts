import { selectUser } from "../store/slices/user/authSlice";
import { useAppSelector } from "./useAppSelector";

export const useIsLoggedIn = () => {
  const user = useAppSelector(selectUser);
  return !!user;
};
