import React from "react";

function Content({title, content, author}){
    return(
        <div>
            <h3>{title}</h3>
            <p id="author">{author.username} &lt;{author.email}&gt;</p>
            <p id="body">{content}</p>
        </div>
    );
}

export default Content;
