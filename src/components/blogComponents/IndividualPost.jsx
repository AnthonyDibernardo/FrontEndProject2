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
    const [comment, setComment] = useState({
        postId: {id}, 
        id: "6",
        name: user.username, 
        email: user.email, 
        body: ""
    });
    const addComment = (comment) => {
        axios.post(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
            comment
        })
        .then (response => {
            console.log(response);
        })
        .catch (error => {
            console.log(error);
        })
    };
    return(
        <>
            {!user.loggedIn ? 
                <Home />
                : 
                <div className={theme}>
                    <Post id={id} />
                    <h3>Comments</h3>
                    <IndividualComment id={id} />
                    <br />
                    <textarea
                        value={comment.content}
                        onChange={(e) => setComment({...comment, content: e.target.value})}
                    />
                    <br />
                    <button 
                        type="submit"
                        onClick={() => addComment(comment)}>
                        Submit
                    </button>
                </div>
            }
        </>
    );
}

export default IndividualPost;
