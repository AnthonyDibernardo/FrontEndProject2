import { useEffect, useState } from "react";
import axios from 'axios';

function IndividualComment({id}){
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(res =>{
                setComments(res.data)
            })
            .catch(error => console.log(error))
            .finally(setLoading(false));
    }, [id]);
    if (loading) return <p>Loading</p>;
    if (comments.length === 0) return <p>No comments yet, be the first</p>;
    return(
        <div>
            {comments.map( comment => (
            <div key={comment.id}>
                <p>{comment.name} &lt;{comment.email}&gt;</p>
                <p>{comment.body}</p>
            </div>
            ))}
        </div>
    );
}

export default IndividualComment;
