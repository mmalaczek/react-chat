import React from 'react';
import './styles.css';
import Message from "./components/Message";

export default function App() {
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
        </div>
    );
}
