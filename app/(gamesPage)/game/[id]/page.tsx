import { db } from "../../../../lib/db"
import { getUserFromCookie } from "../../../../lib/auth"
import { cookies } from "next/headers"
import ViewGame from "../../../../components/ViewGame"
import EditOrDeleteGame from "../../../../components/EditOrDeleteGame"



const getData = async(id) => {
    return  await db.game.findUnique({
      where : {
        id : id.id
    },
      include : {
        belongsTo  : true
      }
  
  })


}




const Game = async({params}) => {
   const user = await getUserFromCookie(cookies())
   const data = await getData(params)
    return (
        <div>
          {
            data?.belongsTo.id  === user?.id ? <EditOrDeleteGame data={data} /> : <ViewGame data={data} />
          }
        </div>
       
   )
   




}
export default Game