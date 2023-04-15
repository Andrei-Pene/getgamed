import { db } from "../../lib/db";
import { validateJWT } from "../../lib/auth";

export default async function CreateCampaign(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === 'POST') {
        const user = await validateJWT(req.cookies[process.env.COOKIE_NAME])

        await db.game.create({
           data : {
            name : req.body.name,
            fundingGoal : req.body.fundingGoal,
            summary : req.body.summary,
            screenshotUrl : req.body.screenshotUrl,
            belongsToId : user.id,
            amountRaised : 0.0
           }
        })

        res.json({data : {message : 'campaign created!'}})
       }
    
}