'use client'
import Modal from "react-modal";
import InputComp from "./InputComp";
import { useState } from "react";
import { createCampaign } from "../lib/api";

Modal.setAppElement("#modal");

const NewCampaign = () => {
    const initialState = {
        name : '',
        fundingGoal : 0,
        summary : '',
        screenshotUrl : ''

}
    const handleSubmit = async(e) => {
        e.preventDefault()
        await createCampaign({
            ...campaignState,
            fundingGoal : Number(campaignState.fundingGoal)
        })
        setCampaignState(initialState)
    }
    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const [campaignState, setCampaignState] = useState(initialState)

  
  return (
    <div className="px-6 py-8 hover:scale-105 transition-all ease-in-out duration-200 flex justify-center items-center">
      <button className="p-1 m-2 border-2 border-gray-300 rounded-lg font-bold hover:scale-110 active:scale-100" onClick={() => openModal()}>+ New Campaign</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="bg-[rgba(0,0,0,.4)] flex justify-center items-center absolute top-0 left-0 h-screen w-screen"
        className="w-3/4 bg-white rounded-xl p-8"
      >
        <h1 className="text-3xl mb-6">New Campaign</h1>
        <form className="flex flex-col items-center space-y-4" onSubmit={handleSubmit}>
          <InputComp
            placeholder="game name"
            value={campaignState.name}
            onChange={(e) =>  setCampaignState((state) => ( {...state, name : e.target.value})) }
            />
          <InputComp
            placeholder="funding goal"
            value={campaignState.fundingGoal}
            onChange={(e) =>  setCampaignState((state) => ( {...state, fundingGoal : e.target.value})) }
            />
          <InputComp
            placeholder="Screenshot Url"
            value={campaignState.screenshotUrl}
            onChange={(e) =>  setCampaignState((state) => ( {...state, screenshotUrl : e.target.value})) }
            />
          <textarea
            placeholder="Enter Details about your game"
            value={campaignState.summary}
            className={" border peer block min-h-[auto] w-full rounded  bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 "}
            onChange={(e) =>  setCampaignState((state) => ( {...state, summary : e.target.value})) }
            />
            
          <button className="p-1 m-2 border-2 gray-300 rounded-lg font-bold hover:scale-110 active:scale-100" type="submit">Create Campaign</button>
        </form>
      </Modal>
    </div>
  );
};

export default NewCampaign

