'use client'
import Image from "next/image"
import mario from '../assets/mario.jpg'
import { useState } from "react"
import InputComp from "./InputComp"
import { updateCampaign } from "../lib/api"
import { useRouter } from "next/navigation"
import { deleteCampaign } from "../lib/api"

const EditOrDeleteGame = ({data}) => {
    const initialState = {
        name : data.name,
        summary : data.summary,
        screenshotUrl : data.screenshotUrl,
        ...data
    }
const [isEditing, setEditState] = useState(false)
const [formState, setFormState]= useState(initialState)
const router = useRouter()

const handleSubmit = async(e) => {
    e.preventDefault();
    await updateCampaign({
        id: data.id,
        ...formState
    })

    setEditState(false)

}

const handleDelete = async(e) => {
    e.preventDefault()
    await deleteCampaign({
        id : data.id,
        ...data
    })
    router.replace('/usercampaigns')
}


    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
            <div className="max-h-96 md:h-screen">
                <Image className="w-screen h-screen object-cover object-top" src={data.screenshotUrl} width={500} height={500} alt="devGame" />
            </div>
            <div className="flex bg-gray-100 p-10">
                <div className="mb-auto mt-auto max-w-lg">
                <p className="font-semibold mb-5">{data?.belongsTo.devName}</p>
                {
                    isEditing ?
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                        <InputComp
                            placeholder={initialState.name}
                            value={formState.name}
                            onChange={(e) =>  setFormState((state) => ( {...state, name : e.target.value})) }
                        /> 
                        <InputComp
                            placeholder={initialState.screenshotUrl}
                            value={formState.screenshotUrl}
                            onChange={(e) =>  setFormState((state) => ( {...state, screenshotUrl : e.target.value})) }
                        /> 
                        <textarea
                                placeholder={initialState.summary}
                                value={formState.summary}
                                className={"my-4 peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"}
                                onChange={(e) =>  setFormState((state) => ( {...state, summary : e.target.value})) }
                            />
                        <button type="submit" className="bg-gray-600 rounded-md py-3 px-7 mt-6 mx-4 text-white">Submit Changes</button>
                    </form>
                    :
                    <div>
                        <h1 className="text-3xl uppercase">{data?.name}</h1>
                        <p>{data?.summary}</p>
                    </div>
                }
                <div>
                    {
                    
                        !isEditing &&
                        <div>
                            <button onClick={() => setEditState(true)} className="bg-black rounded-md py-3 px-7 mt-6 text-white">Edit Campaign</button>
                            <button onClick={handleDelete} className="bg-red-600 rounded-md py-3 px-7 mt-6 mx-4 text-white">Delete Campaign</button>
                        </div>
                    }       
                </div>
                </div>
            </div>
        
        </div>
    )


}

export default EditOrDeleteGame