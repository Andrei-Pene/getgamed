import Card from "./Card"



const CardList = () => {
    <div >
        <Card className={'my-4 mx-4 w-1/5 h-1/3 rounded overflow-hidden shadow-lg relative'}> 
                <Image width={500} src={mario} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                    <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                
            </Card>
    </div>
}

export default CardList