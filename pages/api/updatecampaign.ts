import { db } from "../../lib/db";
import { validateJWT } from "../../lib/auth";

export default async function UpdateCampaign(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === 'PUT') {
        const user = await validateJWT(req.cookies[process.env.COOKIE_NAME])

        await db.game.update({
            where : {
                id: req.body.id
            },
            data : {
                name : req.body.name,
                summary: req.body.summary,
                screenshotUrl : req.body.screenshotUrl
            }

        })
        res.json({message : 'Success'})
    }

}