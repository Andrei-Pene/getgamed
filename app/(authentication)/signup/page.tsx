import AuthenticatedForm from "../../../components/authForm"


export default function SignUp() {
    return (
        <div className="w-screen h-20 shadow-lg bg-slate-500 shadow-cyan-500 ">
        <h2 className="font-mono text-4xl text-white  px-4 decoration-wavy text-shadow-[0_4px_8px_var(--tw-shadow-color)] shadow-cyan-400 "  > Get Gamed</h2>
        <div className="h-screen w-screen flex items-center justify-center">
        
            <AuthenticatedForm authMode={"signup"} toggleUrl={"/signin"}/>
        </div>
        
        </div>
    )
}