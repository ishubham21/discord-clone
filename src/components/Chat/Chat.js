import style from './Chat.module.css'
import ChatHeader from '../ChatHeader/ChatHeader'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'
import GifIcon from '@mui/icons-material/Gif'
import Message from '../Message/Message'
import { useSelector } from 'react-redux'
import { selectChannelId, selectChannelName } from '../../features/appSlice'
import { selectUser } from '../../features/userSlice'
import { useEffect, useState } from 'react'
import db from '../../firebase'
import { doc, collection, getDocs, Timestamp, addDoc } from 'firebase/firestore'

const Chat = () => {

    //making use of useSelector hook to pull the details from the user and app data-layers respectively
    const user = useSelector(selectUser)
    const channelId = useSelector(selectChannelId)
    const channelName = useSelector(selectChannelName)

    const [input, setInput] = useState('')  //this is causing optimization problems since it is causing the children components to be re-renderd each time it gets updates
    const [messages, setMessages] = useState([])
    const [messageRef, setMessageRef] = useState(null)

    useEffect(() => {

        setMessages([])

        const fetchMessages = async () => {
            if (channelId) {
                try {
                    const tempMsg = []

                    //creating a reference for channels (collection) -> channelId (document)
                    const channelRef = doc(db, 'channels', channelId)

                    //creating a collection of messages under the channels (collection) -> channelId (document) -> messages (collection)
                    const msgCollections = await getDocs(collection(channelRef, 'messages'))

                    //iterating over the message collections to get the data
                    msgCollections.forEach(doc => {
                        tempMsg.push(doc.data())
                    })

                    //sorting the array of msg in reverse chronological order
                    tempMsg.sort((a, b) => (a.timestamp - b.timestamp))
                    setMessages(tempMsg)
                }
                catch (error) {
                    console.log('An error occured')
                }
            }
        }
        fetchMessages()
    }, [channelId, messageRef])

    const sendMessage = async (e) => {
        e.preventDefault()

        //creating a refernce of a doc with our channelID
        const channelRef = doc(db, 'channels', channelId)

        //adding a new document each time a user hits enter
        const addRef = await addDoc(collection(channelRef, 'messages'), {
            message: input,
            user: user,
            timestamp: Timestamp.now().toMillis()
        })

        //resetting the input field 
        setInput('')
        setMessageRef(addRef)
    }

    return (<>
        <div className={style.chat}>
            <ChatHeader channelName={channelName} />

            <div className={style.chat__messages}>
                {messages.map(message => {
                    //creating a key by combining timestamp with the userID
                    const key = `${message.timestamp}-${message.user.uid}`
                    return (<Message 
                        message={message.message} 
                        timestamp={message.timestamp} 
                        user={message.user} 
                        key={key} />)
                })}
            </div>

            <div className={style.chat__input}>
                <AddCircleIcon />
                <form onSubmit={sendMessage}>
                    <input
                        disabled={!channelId}
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        type="text"
                        placeholder={`Message #${channelName}`} />

                    <button
                        disabled={!channelId}
                        className={style.chat__inputButton}
                        type='submit'>
                        Send Message
                    </button>
                </form>

                <div className={style.chat__inputIcons}>
                    <CardGiftcardIcon fontSize="large" sx={{
                        p: '10px'
                    }} />
                    <GifIcon fontSize="large" sx={{
                        p: '10px'
                    }} />
                    <EmojiEmotionsIcon fontSize="large" sx={{
                        p: '10px'
                    }} />
                </div>
            </div>
        </div>
    </>)
}

export default Chat