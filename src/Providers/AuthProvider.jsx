import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";



export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const auth = getAuth(app)

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const axiosPublic = useAxiosPublic()


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

    const logOut = async () => {
        setLoading(true)
        return signOut(auth)
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
            if (currentUser) {

                //get token and store client
                const userInfo = { email: currentUser?.email }
                axiosPublic.post('/jwt', userInfo, {withCredentials:true})
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token)
                        }
                    })
                setLoading(false)
            }
            else {
                //todo:remove token if token stored in the client side 
                localStorage.removeItem('access-token')
                setLoading(false)
            }
            console.log('current user ---->', currentUser);
            // setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [axiosPublic])



    const authInfo = {
        user,
        createUser,
        signIn,
        signInWithGoogle,
        updateUserProfile,
        loading,
        setLoading,
        logOut,
        setUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;