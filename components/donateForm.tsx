'use client'
import { useState } from "react"
import InputComp from "./InputComp"
import { donateToCampaign } from "../lib/api"


const DonateForm = ({id}) => {
    const [amount, setAmountState] = useState(0)

    const submitForm = (e) => {
        e.preventDefault()
        donateToCampaign({
            amount : Number(amount),
            id : id

        })
        setAmountState(0)
    }


    return (
        <div className="my-10">
            <form onSubmit={submitForm} >
                <InputComp
                    required
                    className={"border-solid border-orange-300 border-3 px-6 py-2 text-lg rounded-3xl w-full"}
                    placeholder="Enter Amount"
                    value={amount}
                    onChange={(e) =>  setAmountState(e.target.value) }
                />
                <button type="submit" className="p-1 m-2 border-2 border-orange-300 rounded-lg font-bold hover:scale-110 active:scale-100"> Submit Donation </button>
            </form>

        </div>
    )

}

export default DonateForm