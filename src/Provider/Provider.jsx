import { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import axios from 'axios';

const provider = new GoogleAuthProvider();

export const AuthProvider = createContext()
const Provider = ({ children }) => {
    const [currentUser, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const [datas, setData] = useState([]);
    useEffect(() => {
        fetch("/category.json")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    };
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    };
    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            // console.log("current userser is", currentUser)
            // console.log("user is", user)
            const userEmail = user?.email || currentUser?.email;
            const loggedUser = { email: userEmail };
            setUser(user);
            setLoading(false)
            if (user) {
                // const loggedUser = { email: user.email }
                axios.post('https://job-genie-u1ji.onrender.com/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        // console.log("provider compo", res.data)
                    })
            }
            else {
                axios.post("https://job-genie-u1ji.onrender.com/logout", loggedUser, { withCredentials: true })
                    .then(res => {
                        // console.log(res.data)
                    })
            }
        })
    }, [currentUser]);
    // const userProfile = () => {
    //     return updateProfile(auth.currentUser, {
    //         displayName: currentUser.name, photoURL: currentUser.photo
    //     })
    // }
    const context = { createUser, userLogin, googleSignIn, currentUser, logout, loading, datas };
    return (
        <AuthProvider.Provider value={context}>
            {children}
        </AuthProvider.Provider>
    );
};

export default Provider;