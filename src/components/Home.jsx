import { useUser } from "./Provider.jsx";

function Home(){
    const { user, toggleTheme } = useUser();
    return (
        <div className={user.theme}>
            {user.loggedIn ? 
                <h3>Hello {user.username}</h3> 
            : 
                <h3>Welcome to our blog please <a href="/login">log in</a> to create an account</h3>
            }
            <img class="profile" src="public/Anthony.jpg" alt="Anthony DiBernardo"/>
            <img class="profile" src="public/Andrew.jpg" alt="Andrew Hooker"/>
            <h1>Welcome to our site</h1>
            <p>We are Anthony DiBernardo and Andrew Hooker. We are team 3 and this is our submission for project 2 in ITSC 3135</p>
        </div>
    );
}
export default Home;
