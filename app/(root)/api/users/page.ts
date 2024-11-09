import type {NextApiRequest, NextApiResponse} from 'next'
import User from "@/app/types/user";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<User[]>
) {
    console.log(req)
    res.status(200).json(
        [
            {
                username: "username1",
                password: "password1",
                email: "email1",
                phone: "phone1",
            },
            {
                username: "username2",
                password: "password2",
                email: "email2",
                phone: "phone2",
            }
        ]
    )
}