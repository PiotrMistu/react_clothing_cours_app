import {createUserDocumentFromAuth, signInGoogleWithPopup} from "../../utils/firebase/firebase.utils";

const SignInComponent = () => {
    const onSignIn = async () => {
        const {user} = await signInGoogleWithPopup();

        const userDoc = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>Sign in</h1>
            <button onClick={onSignIn}>Sign in</button>
        </div>
    );
}

export default SignInComponent;
