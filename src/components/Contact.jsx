import './css/contact.css'
import { React, useContext } from "react";
import { useUser } from "./Provider.jsx"

function Contact() {
    const { user, login, logout, toggleTheme } = useUser();
    const theme = user.theme;                                 
    return(
        <div className={theme}>

            {user.loggedIn ? 
                <>
                    <h2>Contact us with this form!</h2>
                    <form>
                        <input type="text" defaultValue={user.username} placeholder={user.username} /><br/>
                        <input type="email" defaultValue={user.email} placeholder={user.email} /><br/>
                        <input className="message" placeholder="message"/><br/>
                        <button type="submit">Submit</button>
                    </form>
                </>
                :
                <>
                    <h2>Contact us with this form!</h2>
                    <form>
                        <input type="text" placeholder="name" /><br/>
                        <input type="email" placeholder="email" /><br/>
                        <input className="message" placeholder="message"/><br/>
                        <button type="submit">Submit</button>
                    </form>
                </>
            }


        </div>
    );

}
export default Contact;
