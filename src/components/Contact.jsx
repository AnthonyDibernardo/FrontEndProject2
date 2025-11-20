import './css/contact.css'
import { React, useContext } from "react";
import { UserContext } from './Context.jsx';

function Contact() {
    const user = useContext(UserContext);
    return(
        <div className={user.theme}>

            <h2>Contact us with this form!</h2>
            <form>
                <input placeholder="name"/><br/>
                <input placeholder="email"/><br/>
                <input className="message" placeholder="message"/><br/>
                <button type="submit">Submit</button>
            </form>


        </div>
    );

}
export default Contact;
