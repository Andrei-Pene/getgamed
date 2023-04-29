import { db } from "../../lib/db";
import { validateJWT } from "../../lib/auth";

export default async function DeleteCampaign(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === 'DELETE') {
        const user = await validateJWT(req.cookies[process.env.COOKIE_NAME])

        await db.game.delete({
            where : {
                id: req.body.id
            }
            
        })
        res.json({message : 'Successfully Deleted'})
    }

}