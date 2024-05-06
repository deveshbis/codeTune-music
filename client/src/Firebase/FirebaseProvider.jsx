import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "./firebase.config";

export const AuthContext = createContext(null);
const FirebaseProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [reload, setReload] = useState(false);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logoutUser = () => {
        setLoading(true);
        setUser(null);
        signOut(auth);
        setReload(prevState => !prevState);

    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setLoading(false);
            }
            else{
                setLoading(false); 
            }
        });
        return () => unSubscribe();
    }, [reload])

    const allValue = {
        createUser,
        loading,
        updateUserProfile,
        signInUser,
        logoutUser,
        user,
        setReload
    }
    return (
        <AuthContext.Provider value={allValue}>
            {
                children
            }
        </AuthContext.Provider>
    );
};
FirebaseProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
export default FirebaseProvider;