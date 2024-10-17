import "./chat.css"

const Chat = () => {
    return (
        <form className="gradient-border-inner">
            <div className="chat-input-container">
                <img className="chat-border" src="/imgs/border.svg" alt="" />
                <img src="/imgs/send.svg" alt="" />
                <input className="chat-input" type="text" placeholder="قولي بتدور علي اي ؟" />
                <img src="/imgs/Search.svg" alt="" />
            </div>
        </form>
    )
}

export default Chat