import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import "./chat.css";

const Chat = () => {
    const [inputText, setInputText] = useState('');
    const [showWarning, setShowWarning] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!inputText.trim()) {
            setShowWarning(true);
            setTimeout(() => setShowWarning(false), 3000);
            return;
        }

        // Generate a new UUID for the chat
        const chatId = uuidv4();

        // Navigate to the new chat route with the generated ID and state
        navigate(`/chat/${chatId}`, {
            state: { initialMessage: inputText.trim() }
        });
    };

    return (
        <form className="gradient-border-inner" onSubmit={handleSubmit}>
            <div className="chat-input-container">
                <img className="chat-border" src="/imgs/border.svg" alt="" />
                <img onClick={handleSubmit} src="/imgs/send.svg" alt="" />
                <input
                    className="chat-input"
                    type="text"
                    placeholder="قولي بتدور علي اي ؟"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
                <img src="/imgs/Search.svg" alt="" />
            </div>
            {showWarning && (
                <div className="warning">
                    <p>من فضلك اكتب شي للبحث عنه !</p>
                </div>
            )}
        </form>
    );
};

export default Chat;