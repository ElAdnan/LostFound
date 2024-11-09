import type {NextApiRequest, NextApiResponse} from 'next'
import User from "@/app/types/user";
import {firestore} from "@/app/config/firebase";
import {collection, getDocs} from "firebase/firestore";

const handler = async (
    req: NextApiRequest,
    res: NextApiResponse<User[]>
) => {
    try {
        const querySnapshot = await getDocs(collection(firestore, "Users"));
        const users: User[] = []

        querySnapshot.forEach((doc) => {
            const userData = doc.data()
            users.push({
                id: doc.id,
                username: userData["username"],
                password: userData["password"],
                email: userData["email"],
                phone: userData["phone"],
                first_name: userData["first_name"],
                last_name: userData["last_name"],
            })
        });
        res.status(200).json(users)
    } catch (e) {
        console.error("Error adding document: ", e);
        throw e
    }


};
export default handler