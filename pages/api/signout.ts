import { NextApiRequest } from "next";
import { NextApiResponse } from "next";
import { cookies } from "next/headers"
import { serialize } from "cookie";
import { getUserFromCookie } from "../../lib/auth";

export default function SignOut(req :NextApiRequest, res: NextApiResponse) {
        const user = getUserFromCookie(cookies)

        res.setHeader(
                'Set-Cookie',
                serialize(process.env.COOKIE_NAME, user, {
                    httpOnly : true,
                    path: "/",
                    maxAge : 0
                })
            )
            res.status(201)
            res.json({})
        
    
    
}
