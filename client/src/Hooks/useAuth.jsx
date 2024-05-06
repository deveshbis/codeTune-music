import { useContext } from "react";
import { AuthContext } from "../Firebase/FirebaseProvider";


const useAuth = () => {
    const allAuth = useContext(AuthContext);
    return allAuth;
};

export default useAuth;