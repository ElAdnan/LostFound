import type {NextApiRequest, NextApiResponse} from 'next'
import {auth} from "@/app/config/firebase";
import {signInWithEmailAndPassword, User} from "firebase/auth";
import login from "@/app/services/login";

const handler = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    const email = req.query["email"]
    const password = req.query["password"]

    if (!email || !password) {
        res.status(400).json({error: "email and password are required"})
        return
    }

    login(email as string, password as string)
        .then((user) => {
            // Signed in
            res.status(200).json(user)

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            res.status(400).json({
                errorCode: errorCode,
                errorMessage: errorMessage
            })
        });
};
export default handler