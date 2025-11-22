import React, { useState } from "react";
import { useParams } from "react-router";
import Post from "./post";
import Home from "../Home.jsx";
import IndividualComment from "./IndividualComment";
import axios from "axios";
import { useUser } from "../Provider";

function IndividualPost(){
    const { user, login, logout, toggleTheme } = useUser();
    const theme = user.theme;                                 
    const { id } = useParams();
    const [commentBody, setCommentBody] = useState("");
    const [newComments, setNewComments] = useState([]);
    
    const addComment = () => {
        const comment = {
            postId: id,
            name: user.username,
            email: user.email,
            body: commentBody
        };
        
        axios.post(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, comment)
        .then (response => {
            console.log(response);
            // Add the new comment to local state with a temporary ID
            setNewComments(prev => [...prev, { ...comment, id: Date.now() }]);
            setCommentBody(""); // Clear the textarea after successful submission
        })
        .catch (error => {
            console.log(error);
        })
    };
    return(
        <>
            <div className={theme}>
                <Post id={id} />
                <h3>Comments</h3>
                <IndividualComment id={id} newComments={newComments} />
                <br />

                {!user.loggedIn ? 
                <>
                        <h2>Please Login to post a comment!</h2>
                </> :
                    <>  
                        <textarea
                            value={commentBody}
                            onChange={(e) => setCommentBody(e.target.value)}
                            placeholder="Write your comment here..."
                        />
                        <br />
                        <button 
                            type="submit"
                            onClick={addComment}>
                            Submit
                        </button>
                    </>
                }
            </div>
            
        </>
    );
}

export default IndividualPost;
