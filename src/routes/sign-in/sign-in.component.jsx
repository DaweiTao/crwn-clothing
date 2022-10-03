import {signInWithGooglePopup} from "../../utils/firebase/firebase.utils"

const SignIn = () => {
    const logGoogleUser = async() => {
        const response = await signInWithGooglePopup();
        console.log(response)
    }

    return (
        <div>
            <h1>Sign in works</h1>
            <button onClick={logGoogleUser}>Signin with google popup</button>
        </div>
    )
}

export default SignIn