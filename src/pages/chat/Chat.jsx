import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import useIdleTimeout from '../../hooks/useIdleTimeout';
import "./chat.css";

const Chat = () => {
    const [inputText, setInputText] = useState('');
    const [showWarning, setShowWarning] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Initialize idle timeout - will redirect to home after 5 minutes of inactivity
    useIdleTimeout();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!inputText.trim()) {
            setShowWarning(true);
            setTimeout(() => setShowWarning(false), 3000);
            return;
        }

        // Generate a new UUID for the chat
        const chatId = uuidv4();

        // Determine the section based on the current path
        const isMobile = location.pathname.includes('/mobile');
        const isAccessories = location.pathname.includes('/accessories');

        // Build the appropriate route
        let route = '/chat';
        if (isMobile) {
            route += '/mobile';
        } else if (isAccessories) {
            route += '/accessories';
        }
        route += `/${chatId}`;

        // Navigate to the appropriate route with the generated ID and state
        navigate(route, {
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