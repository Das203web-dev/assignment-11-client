import { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

export const AuthProvider = createContext()
const Provider = ({ children }) => {
    const [currentUser, setUser] = useState();
    const [datas, setData] = useState([]);
    useEffect(() => {
        fetch("/category.json")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    const googleSignIn = () => {
        return signInWithPopup(auth, provider)
    };
    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        })
    }, []);
    const userProfile = () => {
        return updateProfile(auth.currentUser, {
            displayName: currentUser.name, photoURL: currentUser.photo
        })
    }
    const context = { createUser, userLogin, googleSignIn, currentUser, logout, userProfile, datas };
    return (
        <AuthProvider.Provider value={context}>
            {children}
        </AuthProvider.Provider>
    );
};

export default Provider;