import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./activeChat.css";

const ActiveChat = () => {
    const { sessionId } = useParams(); // Get sessionId from URL params
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [error, setError] = useState('');
    const scrollAreaRef = useRef(null);

    // Remove the sessionId generation useEffect since we're getting it from URL

    useEffect(() => {
        if (scrollAreaRef.current) {
            scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        const userMessage = {
            id: Date.now(),
            text: inputText.trim(),
            sender: 'user'
        };

        // Append the new message instead of replacing
        setMessages(prevMessages => [...prevMessages, userMessage]);
        setInputText('');
        setIsTyping(true);
        setError('');

        try {
            const response = await axios.post('https://ai-laptops.netlify.app/api/rag', {
                userPrompt: inputText.trim(),
                sessionId
            }, {
                timeout: 10 * 60 * 1000
            });

            // Add only the new message from the response
            const newMessage = {
                id: Date.now() + 1,
                text: response.data.history[response.data.history.length - 1].content,
                sender: 'agent'
            };

            setMessages(prevMessages => [...prevMessages, newMessage]);

        } catch (error) {
            console.error('Error:', error);
            setError('عذراً، حدث خطأ. يرجى المحاولة مرة أخرى.');
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className="active-chat-container">
            <div className="scrollArea" ref={scrollAreaRef}>
                {messages.map((message) => (
                    <div key={message.id} className={`${message.sender === 'user' ? 'bot' : 'user'}`}>
                        <div className="chat-text">
                            <p>{message.text}</p>
                        </div>
                        {error && <div className="error">{error}</div>}
                        {message.sender === 'user' ? (
                            <div className="chat-blob" />
                        ) : (
                            <img src="/imgs/logo.svg" alt="" />
                        )}
                    </div>
                ))}
                {isTyping && (
                    <div className="user">
                        <div className="chat-text">
                            <p>loading....</p>
                        </div>
                        <img src="/imgs/logo.svg" alt="" />
                    </div>
                )}
            </div>
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
            </form>
        </div>
    );
};

export default ActiveChat;