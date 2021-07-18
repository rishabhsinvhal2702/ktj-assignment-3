import { useHistory } from "react-router-dom";
import React from 'react';
const Signup = () => {

    const history = useHistory();
    const click = () =>{
        history.push('/created');
    }
    return ( 
        <div className="sign-up-main-box">
            <fieldset className="signup-field">
                <legend className="sign-up-legend"><div className="surr-signup">Sign Up</div></legend>
                <form className="sign-up-form" autoComplete="off" onSubmit={click}>
                    <input type="text" className="signup-input-name fname" placeholder="First Name" id="fname" spellCheck="false" required />
                    <label htmlFor="fname" className="signup-label-name label-fname">First Name</label>
                    <input type="text" className="signup-input-name lname" placeholder="Last Name" id="lname" spellCheck="false" required />
                    <label htmlFor="lname" className="signup-label-name label-lname">Last Name</label>
                    <input type="text" className="signup-input signup-username" placeholder="Username" id="signup-username" spellCheck="false" required />
                    <label htmlFor="signup-username" className="signup-label">Username</label>
                    <input type="password" className="signup-input signup-password" placeholder="Password" id="signup-password" spellCheck="false" required />
                    <label htmlFor="signup-password" className="signup-label">Password</label>
                    <input type="password" className="signup-input signup-confirm-password" placeholder="Confirm Password" id="signup-c-password" spellCheck="false" required />
                    <label htmlFor="signup-c-password" className="signup-label">Confirm Password</label>
                    <input type="email" className="signup-input signup-email" placeholder="E-mail" id="signup-email" spellCheck="false" required />
                    <label htmlFor="signup-email" className="signup-label">E-mail</label>
                    <input type="telephone" className="signup-input ph-number" placeholder="Phone Number" id="ph-no" required />
                    <label htmlFor="ph-no" className="signup-label">Phone Number</label>
                    <button className="sign-up-button">Sign-Up</button>
                </form>
            </fieldset>
        </div>
     );
}
 
export default Signup;