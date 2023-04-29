import Image from "next/image"
import DonateForm from "./donateForm"
import mario from '../assets/mario.jpg'

const ViewGame = ({data}) => {
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
            <div className="max-h-96 md:h-screen">
                <Image className="w-screen h-screen object-cover object-top" src={mario} alt="devGame" />
            </div>
            <div className="flex bg-gray-100 p-10">
                <div className="mb-auto mt-auto max-w-lg">
                <h1 className="text-3xl uppercase">{data?.name}</h1>
                <p className="font-semibold mb-5">{data?.belongsTo.devName}</p>
                <p>{data?.summary}</p>
                <DonateForm id={data?.id} />
                
                </div>
            </div>
        
        </div>
    )


}

export default ViewGame