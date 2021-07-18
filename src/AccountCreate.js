import { useHistory } from "react-router-dom";
import React from 'react';

const AccountCreate = () => {
    const history = useHistory();
    var t = 4;
    const timer = () => {
        t--;
        if (t === 0) {
            clearInterval(ptime);
            history.push('/dashboard');
        }
    }
    var ptime = setInterval(timer, 1000);

    return (
        <div className="account-created-main-page">
            <div className="account-created-credentials">
                <h1 className="created-heading-primary">Congrats !!</h1>
                <h2 className="created-heading-secondary">Your Account Has Been Created Successfully</h2>
                <h2 className="success-sign-in-heading-secondary">Redirecting to dasboard...</h2>
            </div>
        </div>
    );
}

export default AccountCreate;