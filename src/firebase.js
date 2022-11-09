// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile
} from "firebase/auth"; import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';
import { userHandle } from "./utils";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore(app);

onAuthStateChanged(auth, async user => {
    if (user) {
        const dbUser = await getDoc(doc(db, "users", user.uid))
        let data = {
            uid: user.uid,
            fullName: user.displayName,
            email: user.email,
            emailVerified: user.emailVerified,
            ...dbUser.data()
        }
        userHandle(data)
    } else {
        userHandle(false)
    }
})
export const login = async (email, password) => {
    try {
        return await signInWithEmailAndPassword(auth, email, password)
    } catch (err) {
        toast.error(err.code)
    }
}

export const register = async ({ email, password, full_name, username }) => {
    try {
        const user = await getDoc(doc(db, "usernames", username))
        if (user.exists()) {
            toast.error(`${username} kullanıcı adı başkası tarafından kullanılıyor.`)
        } else {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            if (response.user) {

                await setDoc(doc(db, "usernames", username), {
                    user_id: response.user.uid
                })

                await setDoc(doc(db, "users", response.user.uid), {
                    fullName: full_name,
                    username: username,
                    followers: [],
                    following: [],
                    notifications: [],
                    website: '',
                    bio: '',
                    phoneNumber: '',
                    gender: '',
                    post:0,
                })

                await updateProfile(auth.currentUser, {
                    displayName: full_name
                })
                toast.success('Kayıt Başarılı')
                return response.user

            }
        }
    } catch (err) {
        toast.error(err.code)
    }
}


export const logout = async () => {
    try {
        await signOut(auth)
    } catch (err) {
        toast.error(err.code)
    }
}