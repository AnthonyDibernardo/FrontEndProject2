import { useEffect, useState } from "react";
import axios from 'axios';

function IndividualComment({id, newComments = []}){
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
    
    // Combine fetched comments with new comments
    const allComments = [...comments, ...newComments];
    
    if (loading) return <p>Loading</p>;
    if (allComments.length === 0) return <p>No comments yet, be the first</p>;
    return(
        <div>
            {allComments.map( comment => (
            <div key={comment.id}>
                <p>{comment.name} &lt;{comment.email}&gt;</p>
                <p>{comment.body}</p>
            </div>
            ))}
        </div>
    );
}

export default IndividualComment;
