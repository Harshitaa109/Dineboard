import { useContext } from "react";
import { UserContext } from "./UserContext";

// Custom hook to use the UserContext
const useUser = () => {
  return useContext(UserContext);
};

export default useUser;
