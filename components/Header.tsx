import HeaderLinkList from "./HeaderLinkList";
import {cookies} from 'next/headers'
import { getUserFromCookie } from "../lib/auth";


const getData = async() => {
    const user = getUserFromCookie(cookies())
    return user


}
    


const Header = async() => {
    const user = await getData()
    return (
        <div className="relative w-screen h-20 mx-auto shadow-lg bg-slate-500 shadow-cyan-500 flex justify-center ">
            <h2 className="font-mono text-4xl text-white  px-4"> Welcome {user?.devName}</h2>
            <div className="absolute bottom-2">
            <HeaderLinkList />
            </div>
        </div>


    )


}

export default Header;