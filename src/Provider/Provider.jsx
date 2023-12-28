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
            const userEmail = user?.email || currentUser?.email;
            const loggedUser = { email: userEmail };
            setUser(user);
            setLoading(false)
            if (user) {
                setLoading(true)
                axios.post('https://job-genie-u1ji.onrender.com/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        if (res.data.success) {
                            setLoading(false)
                        }
                    })
            }
            else {
                axios.post("https://job-genie-u1ji.onrender.com/logout", loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log("from logout", res.data)
                    })
            }
        })
    }, [currentUser, loading]);

    const context = { createUser, userLogin, googleSignIn, currentUser, logout, loading, datas, setLoading };
    return (
        <AuthProvider.Provider value={context}>
            {children}
        </AuthProvider.Provider>
    );
};

export default Provider;