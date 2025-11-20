import { useState, useEffect} from "react";
import { useUser } from '../Provider.jsx';
import axios from 'axios';
import Content from './Content.jsx';

function Post({id}){
    const { user, login, logout, toggleTheme } = useUser();
    const theme = user.theme;

    const [loading, setLoading] = useState(true);
    const [postData, setPostData] = useState();
    console.log(id);

    useEffect(() => {
        //Experimental and for testing
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
            response => console.log(response);
            setPostData(response.data);
        })
        .catch(error => console.log('Error fetching posts:', error))
    }, [id]);

    const [author, setAuthor] = useState();
    useEffect(() => {
        if(postData == undefined) return;
        axios.get(`https://jsonplaceholder.typicode.com/users/${postData.userId}`)
            .then(response => {
                response => console.log(response);
                setAuthor(response.data);
            })
            .catch(error => console.log('Error fetching posts:', error))
            .finally(() => setLoading(false));
    }, [postData]);
    return (
        <main className={theme}>
            {loading ? (<p>Loading</p>) : (<>
                <Content 
                title={postData.title}
                content={postData.body}
                author={author}
                />
            </>)}
        </main>
    );
}

export default Post;

