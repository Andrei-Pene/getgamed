'use client';
import {useRouter} from "next/navigation"
import Card from "./Card";
import { useState } from "react";
import InputComp from "./InputComp";
import { registerUser, signin } from "../lib/api"
import Link from "next/link"

type State = {
    email : string,
    password : string,
    devName? : string
}

type authProps = {
    authMode : string,
    toggleUrl : string
}


const AuthenticatedForm = ({authMode, toggleUrl}: authProps) => {
    const initialState : State = {
        email : '',
        devName: '',
        password: ''


    }

    const submitForm = (e) => {
        e.preventDefault()

       if(authMode === "signup") {
                registerUser(formState)
        }else {
                signin(formState)
            }
        setFormState(initialState)
        router.replace("/home")

       

    }
    const [formState, setFormState] = useState(initialState)
    const router = useRouter()
    return (
    <Card className='my-4 mx-4 w-1/5 h-1/4 flex items-center justify-center'> 
        <form onSubmit={submitForm} className="px-10 ">
        {
            authMode === "signup" &&
        <InputComp
                required
                className={"border-solid border-orange-300 border-3 px-6 py-2 text-lg rounded-3xl w-full mb-2"}
                placeholder="Developer"
                value={formState.devName}
                onChange={(e) =>  setFormState((state) => ( {...state, devName : e.target.value})) }

            />
        }
         
        <InputComp
                required
                className={"border-solid border-orange-300 border-3 px-6 py-2 text-lg rounded-3xl w-full mb-2"}
                placeholder="email"
                value={formState.email}
                onChange={(e) =>  setFormState((state) => ( {...state, email : e.target.value})) }

            />
        <InputComp
                required
                className={"border-solid border-orange-300 border-3 px-6 py-2 text-lg rounded-3xl w-full"}
                placeholder="password"
                value={formState.password}
                onChange={(e) =>  setFormState((state) => ( {...state, password : e.target.value})) }

            />
        <div className=" my-3  flex justify-center">
            <button type="submit" className="p-1 m-2 border-2 border-orange-300 rounded-lg font-bold hover:scale-110 active:scale-100"> {authMode === "signup" ? "Sign Up" : "Sign In"} </button>
            <div className="py-3"><Link href={toggleUrl}>{authMode === "signup" ? "Sign in Instead?" : "Create an Account?"} </Link></div>
        </div>
        
        </form>
        
    
    </Card>
    )

}

export default AuthenticatedForm


