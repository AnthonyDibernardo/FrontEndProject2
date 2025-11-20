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
        </div>
    );
}
export default Home;
