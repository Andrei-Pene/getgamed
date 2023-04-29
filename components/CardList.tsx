import Card from "./Card"
import Image from "next/image"
import mario from '../assets/mario.jpg'
import Link from "next/link"



const CardList = ({data}) => (
    <div className="flex flex-wrap w-full" >
        {
            data.map((game) => (
                
                <Card key={game.id} className={'my-20 mx-4 w-1/5 h-1/3 rounded overflow-hidden shadow-lg relative'}> 
                <Image width={500} height={500} src={mario} alt="game image" />
                <Link href={`/game/${game.id}`}>
                    <div className="px-6 py-4">
                        <div  className="font-bold text-xl mb-2 flex space-x-20 ">
                        <p className="text-white">{game.name}</p>
                        <p className="text-white"> ${game.amountRaised}/${game.fundingGoal}</p>
                        
                        </div>
                        <p className="text-gray-700 text-base">
                            {game.summary}
                        </p>
                    </div>
                </Link>
                
                </Card>
            ))
    
        
        }   
    </div>
  
)

export default CardList