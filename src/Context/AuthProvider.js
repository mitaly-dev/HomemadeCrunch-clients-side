import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import app from '../Firebase/Firebase.config';
import { useEffect } from 'react';

export const AuthContext=createContext()

const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const [user,setUser] = useState()
    const [loading ,setLoading] = useState(true)

    // create user
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // update user profile
    const updateUserProfile=(profile)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,profile)
    }

    // logout
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

    // user signin
    const userSignIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // get user
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
            return
        })
        return ()=>unsubscribe()
    },[])


    const value = {
        user,
        createUser,
        updateUserProfile,
        logOut,
        userSignIn
    }
    return (
        <div>
            <AuthContext.Provider value = {value}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;