import React from 'react';
import './styles.css';
import Message from "./components/Message";

export default function App() {
    const messages = [
        { id: 12, user: 'Patryk', content: 'Hej' },
        { id: 24, user: 'Ania', content: 'Ho' },
        { id: 67, user: 'Patryk', content: 'Lublin' },
    ];

    return (
        <div className="App">
            {messages.map(message => (
                <Message key={message.id} message={message} />
            ))}
        </div>
    );
}
