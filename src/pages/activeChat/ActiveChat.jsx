import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
// import Chat from "../chat/Chat"
import "./activeChat.css"
import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { v4 as uuidv4 } from 'uuid';

const ActiveChat = () => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [sessionId, setSessionId] = useState('');
    const [error, setError] = useState('');
    const scrollAreaRef = useRef(null);

    useEffect(() => {
        const newSessionId = uuidv4();
        setSessionId(newSessionId);
    }, []);

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

        setMessages(prevMessages => [...prevMessages, userMessage]);
        setInputText('');
        setIsTyping(true);
        setError('');

        try {
            const response = await axios.post('http://localhost:3000/api/rag', {
                userPrompt: inputText.trim(),
                sessionId
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            setMessages(response.data.history.map((entry, index) => ({
                id: index,
                text: entry.content,
                sender: entry.role === 'human' ? 'user' : 'agent'
            })));

        } catch (error) {
            console.error('Error:', error);
            setError('عذراً، حدث خطأ. يرجى المحاولة مرة أخرى.');
        } finally {
            setIsTyping(false);
        }
    };




    return (

        <div className="active-chat-container">
            <div className="scrollArea">
                {messages.map((message) => (
                    <div key={message.id} className={` ${message.sender === 'user' ? 'user' : 'bot'}`}>

                        <div className="chat-text">

                            <p>{message.text}</p>
                        </div>
                        <div className="chat-blob" />
                    </div>
                ))}

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
                {/* {showWarning && (
                    <div className="warning">
                        <p>من فضلك اكتب شي للبحث عنه !</p>
                    </div>
                )} */}
            </form>
        </div>
    )
}

export default ActiveChat