import { useNavigate } from "react-router-dom";
import { useUser } from "./Provider.jsx";

function Login(){
    const { user, logout, login } = useUser();
    const theme = user.theme;
    const navigate = useNavigate();
    const formLogin = (e) => {
        e.preventDefault();
        login(e.target[0].value, e.target[1].value, e.target[2].value);
        navigate("/");
    };
    const formLogoff = () => {
        logout();
        navigate("/");
    };

    return(
        <div className={theme}>
            {user.auth ?
                <div id="authForm" className={theme}>
                    <p>Would you like to log out</p>
                    <button type="button" onClick={formLogoff}>Log Out</button>
                </div>
            :
                <form id="authForm" className={theme} onSubmit={formLogin}>
                    <input type="text" placeholder="name"/><br/>
                    <input type="email" placeholder="email"/><br/>
                    <input type="password" placeholder="password"/><br/>
                    <button type="submit">Login</button>
                </form>
            }
        </div>
    )
}

export default Login;

