import { useHistory } from "react-router-dom";
import React from 'react';
const SuccessSignIn = () => {
    const history = useHistory();
    var t=4;
    const timer = () =>{
        t--;
        if(t===0){
            clearInterval(ptime);
            history.push('/dashboard');
        }
    }
    var ptime = setInterval(timer, 1000);

    return (
        <div className="sign-in-success-main-page">
            <div className="success-signin-credentials">
                <h1 className="success-sign-in-heading-primary">You are signed in Successfully !</h1>
                <h2 className="success-sign-in-heading-secondary">Redirecting to dasboard...</h2>
            </div>
        </div>
    );
}

export default SuccessSignIn;