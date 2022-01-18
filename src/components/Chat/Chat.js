import style from './Chat.module.css'
import ChatHeader from '../ChatHeader/ChatHeader'

const Chat = () => {
    return(<>
        <div className={style.chat}>
            <ChatHeader />
        </div>
    </>)
}

export default Chat