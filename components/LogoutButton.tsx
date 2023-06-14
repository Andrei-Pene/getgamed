'use client'
import { signout } from "../lib/api"
import { useRouter } from "next/navigation"



const LogoutButton = () => {
    const router = useRouter()

    const handleSignout = async() => {
        await signout()
        router.replace('/usercampaigns')
    }
    return(
    <button onClick={handleSignout}> Logout </button>
    )
    
}

export default LogoutButton