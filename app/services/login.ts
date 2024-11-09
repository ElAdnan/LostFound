import {auth} from "@/app/config/firebase";
import {signInWithEmailAndPassword, User} from "firebase/auth";

const login = async (email: string, password: string): Promise<User> => {
    return signInWithEmailAndPassword(auth, email as string, password as string)
        .then((userCredential) => {
            // Signed in
            return userCredential.user;
        })
}

export default login