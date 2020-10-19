import React from "react";

function Message({ message }) {
    return (
        <div className="message">
            <div className="message--user">{message.user}</div>
            <div className="message--content">{message.content}</div>
        </div>
    );
}

export default Message;
