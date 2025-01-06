/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from "react-markdown"; // Import react-markdown
import "./activeChat.css";

const ActiveChat = () => {
    const { sessionId } = useParams();
    const location = useLocation();
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [error, setError] = useState('');
    const scrollAreaRef = useRef(null);
    const initialMessageSent = useRef(false);

    useEffect(() => {
        // Handle initial message if it exists and hasn't been sent yet
        const initialMessage = location.state?.initialMessage;
        if (initialMessage && !initialMessageSent.current) {
            initialMessageSent.current = true;
            handleMessage(initialMessage);
        }
    }, [location.state]);

    useEffect(() => {
        if (scrollAreaRef.current) {
            scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
        }
    }, [messages]);

    const handleMessage = async (text) => {
        const userMessage = {
            id: Date.now(),
            text: text,
            sender: 'user'
        };

        setMessages(prevMessages => [...prevMessages, userMessage]);
        setIsTyping(true);
        setError('');

        // https://google-sheets.netlify.app/api/rag
        try {
            const response = await axios.post('https://google-sheets.netlify.app/api/rag', {
                userPrompt: text,
                sessionId
            }, {
                timeout: 10 * 60 * 1000
            });

            const aiResponse = response.data.history[response.data.history.length - 1].content;

            const newMessage = {
                id: Date.now() + 1,
                text: aiResponse, // Markdown content from AI
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        await handleMessage(inputText.trim());
        setInputText('');
    };

    return (
        <div className="active-chat-container">
            <div className="scrollArea" ref={scrollAreaRef}>
                {messages.map((message) => (
                    <div key={message.id} className={`${message.sender === 'user' ? 'bot' : 'user'}`}>
                        <div className="chat-text">
                            {message.sender === 'agent' ? (
                                <ReactMarkdown className={`markdown`}>{message.text}</ReactMarkdown> // Render Markdown
                            ) : (
                                <p>{message.text}</p>
                            )}
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
                            <span className="loader"></span>
                            {/* <div className="loding-container">
                                <div className="loading-bar gradient-1"></div>
                                <div className="loading-bar gradient-2"></div>
                                <div className="loading-bar gradient-3"></div>
                            </div> */}
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
