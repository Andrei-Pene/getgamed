import AuthenticatedForm from "../../../components/authForm"


export default function SignUp() {
    return (
        <AuthenticatedForm authMode={"signup"} toggleUrl={"/signin"} />
    )
}