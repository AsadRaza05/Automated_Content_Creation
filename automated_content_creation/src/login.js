import { GoogleLogin } from "react-oauth-google";

const clientID = "208368355986-5rrbo00fchtvkb2t1n9dpebv7lq0bilm.apps.googleusercontent.com";

function Login() {

    const onSuccess = (res) => {
        console.log("login successful current user: ", res.profileObj);
    }

    const onFailure = (res) => {
        console.log("login failed res: ", res);
    }

    return(
        <div id = "signInButton">
            <GoogleLogin
                clientID={clientID}
                buttonText = "Get Started"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />

        </div>
    )
}

export default Login;