import AuthenticatedForm from "../../../components/authForm"


export default function Signin() {
    return (
        <AuthenticatedForm authMode={"signin"} toggleUrl={"/signup"}/>
    )
}