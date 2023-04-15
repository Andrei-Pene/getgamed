import { db } from "../../lib/db";
import { createJWT, hashPassword, comparePasswords} from "../../lib/auth";
import { NextApiRequest, NextApiResponse } from "next";
import {serialize} from 'cookie'



export default async function Register(req :NextApiRequest, res: NextApiResponse) {

    if (req.method === 'POST') {
        const user = await db.user.create({
            data : {
                email : req.body.email,
                password : await hashPassword(req.body.password),
                devName : req.body.devName
            } 

        })

        const jwt = await createJWT(user)

        res.setHeader(
            'Set-Cookie',
            serialize(process.env.COOKIE_NAME, jwt, {
                httpOnly : true,
                path: "/",
                maxAge : 60 * 60 * 24 * 7
            })
        )
        res.status(201)
        res.json({})
    } else {
        res.status(402)
        res.json({})
    }
    
}

