import NewCampaign from "../../../components/NewCampaign"
import { getUserFromCookie } from "../../../lib/auth"
import { cookies } from "next/headers"
import { db } from "../../../lib/db"
import CardList from "../../../components/CardList"

const getData = async() => {
    const user = await getUserFromCookie(cookies())

    return await db.user.findUnique({
        where : {
            id : user?.id
        },
        include: {
            Games : true
        }
    })
}


const UserCampaigns = async() => {
    const data = await getData()
    return(
        <div>
            
        <NewCampaign />
        <CardList data={data?.Games} />
        </div>
    )

}

export default UserCampaigns