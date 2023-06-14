import HeaderLinkList from "./HeaderLinkList";
import {cookies} from 'next/headers'
import { getUserFromCookie } from "../lib/auth";
import LogoutButton from "./LogoutButton";



const getData = async() => {
    const user = await getUserFromCookie(cookies())
    return user


}

    


const Header = async() => {
    const user = await getData()
    return (
       
        <div className="relative w-screen h-20 mx-auto shadow-lg bg-slate-500 shadow-cyan-500 flex justify-center">
            <h2 className="font-mono text-4xl text-white  px-4 text-shadow-[0_4px_8px_var(--tw-shadow-color)] shadow-cyan-400"> Welcome {user?.devName}</h2>
            <div className="absolute bottom-2">
                <HeaderLinkList />
            </div>
            <div className="flex-col align-end justify-end absolute right-10 m-2 text-white border-2 border-gray-300 rounded-lg p-2">
                <LogoutButton />
            </div>
            
        </div>
        
      
        


    )


}

export default Header;