
import { db } from "../../../lib/db"
import SearchComp from "../../../components/SearchComp"



const getData = async() => {
    return await db.game.findMany({})
}



const AllGames = async() => {
     const data = await getData()
     
        return (
            <div>
                <SearchComp gameData={data} />
                
            </div>
            
        )


    }

export default AllGames
