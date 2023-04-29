'use client'
import { useState } from "react"
import InputComp from "./InputComp"
import CardList from "./CardList"

const SearchComp = ({gameData}) => {
    const [searchInput, setSearchInput] = useState('')

    const filteredData = gameData.filter(
        game => game.name.toLowerCase()
        .includes(searchInput.toLowerCase())
        
        
        
        )

    return (
        <div className="my-10 flex flex-col items-center justify-center">
            <InputComp
                placeholder="search by game name"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                />
            <CardList data={filteredData} />
        </div>
    )

}
export default SearchComp