import React, { useState } from 'react';
import './styles.css';
import Message from "./components/Message";
import MessageForm from "./components/MessageForm";

export default function App() {
    const [message, setMessage] = useState("");
    const handleSubmit = (event) => {
        const value = event.target.value;
        console.log(value);
        event.preventDefault();
    };
    const messages = [
        { id: 12, user: 'Patryk', content: 'Hej', datetime: Date.now() },
        { id: 24, user: 'Ania', content: 'Ho', datetime: Date.now() },
        { id: 67, user: 'Patryk', content: 'Lublin', datetime: Date.now() },
    ];

    return (
        <div className="App">
            {messages.map(message => (
                <Message key={message.id} message={message} />
            ))}
            <MessageForm
                handleSubmit={handleSubmit}
                handleContentChange={setMessage}
            />
        </div>
    );
}
