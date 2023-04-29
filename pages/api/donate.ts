import { db } from "../../lib/db";
import { validateJWT } from "../../lib/auth";

export default async function NewDonation(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === 'POST') {
        const user = await validateJWT(req.cookies[process.env.COOKIE_NAME])

        await db.game.update({
            where : {
                id: req.body.id
            },
            data : {
                amountRaised : req.body.amount
            }

        })
        res.json({message : 'Success'})
    }

}