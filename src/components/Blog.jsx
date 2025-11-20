import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import { useUser } from "./Provider";
import axios from 'axios'

function Blog(){
    const UserContext = useUser;
    const user = UserContext.user;
    const theme = user.theme;
    const [loading, setLoading] = useState(true);
    const [posts, setPost] = useState([]);

    useEffect(() => {
       axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => {
            setPost(res.data)
        })
        .catch(error => {
            console.log('Error fetching posts:', error)
        })
        .finally(() => setLoading(false));
    }, []);
    console.log(user.loggedIn);
    return (
        <>
            {user.loggedIn ? 
                <Home />
            : 
                <div className={theme}>
                    <h2>Welcome to Our Blog<br></br> below are our posts</h2>
                    {loading ? (
                        <p>Loading</p>
                    ) : (
                        posts.map( post => (
                            <li key={post.id}>
                                <Link to={`/posts/${post.id}`}>{post.title}</Link>
                            </li>
                        ))   
                    )
                    }
                </div>
            }
        </>
    );
}
export default Blog;
