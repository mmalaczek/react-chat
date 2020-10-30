import React from "react";

function MessageForm({ handleSubmit, handleContentChange }) {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="user" />
                <input type="text" name="content" onChange={handleContentChange}/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default MessageForm;
