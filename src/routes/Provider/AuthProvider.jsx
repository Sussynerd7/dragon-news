import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { app } from '../../firebase/firebase.init';


export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const createUser = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass)
    }
    const logOut =() =>{
    return signOut(auth);
    }
    // useEffect here
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            setUser(currentuser)
        });
        return () => {
            unsubscribe()
        }
    })
    const authData = {
        user,
        setUser,
        createUser,
        logOut,
    }
   //return part
    return <AuthContext value={authData}>
        {children}
    </AuthContext>;
};

export default AuthProvider;
