import { useHistory } from "react-router-dom";
import React from 'react';

const InvalidSignIn = () => {
    const history = useHistory();
    var t = 4;
    const timer = () => {
        t--;
        if (t === 0) {
            clearInterval(ptime);
            history.push('/signin');
        }
    }
    var ptime = setInterval(timer, 1000);

    return (
        <div className="invalid-sign-in-main-page">
            <div className="invalid-credentials">
                <h1 className="invalid-sign-in-heading-primary">Invalid credentials</h1>
                <h2 className="invalid-sign-in-heading-secondary">Username and Password <br /> should be of more than <br /> 8 characters</h2>
                <h2 className="invalid-redirect-signin">Redirecting To Signin Page ...</h2>
            </div>
        </div>
    );
}

export default InvalidSignIn;