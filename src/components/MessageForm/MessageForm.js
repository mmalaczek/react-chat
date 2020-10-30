import React from "react";

function MessageForm() {
    return (
        <div>
            <form>
                <input type="text" name="user" />
                <input type="text" name="content" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default MessageForm;
