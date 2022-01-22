import style from './Chat.module.css'
import ChatHeader from '../ChatHeader/ChatHeader'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'
import GifIcon from '@mui/icons-material/Gif'
import Message from '../Message/Message'

const Chat = () => {
    return(<>
        <div className={style.chat}>
            <ChatHeader />

            <div className={style.chat__messages}>
                <Message />
                <Message />
                <Message />
            </div>

            <div className={style.chat__input}>
                <AddCircleIcon />
                <form>
                    <input type="text" placeholder={`Message #TESTCHANNEL`}/>
                    <button className={style.chat__inputButton} type='submit'>
                        Send Message
                    </button>
                </form>

                <div className={style.chat__inputIcons}>
                    <CardGiftcardIcon fontSize="large" sx={{
                        p: '10px'
                    }}/>
                    <GifIcon fontSize="large" sx={{
                        p: '10px'
                    }}/>
                    <EmojiEmotionsIcon fontSize="large" sx={{
                        p: '10px'
                    }}/>
                </div>
            </div>
        </div>
    </>)
}

export default Chat