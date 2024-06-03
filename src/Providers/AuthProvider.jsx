import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";



export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const auth = getAuth(app)

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('current user ---->',currentUser);
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [])



    const authInfo = {
        user,
        createUser,
        signIn,
        signInWithGoogle,
        updateUserProfile,
        loading,
        setLoading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;