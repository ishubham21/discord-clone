import { Avatar } from '@mui/material'
import style from './Message.module.css'

const Message = ({ timestamp, user, message }) => {

    //converting the epoch timestamp to regular date and time 
    timestamp = new Date(timestamp).toString()

    return (<>
        <div className={style.message}>
            <Avatar src={user.photo} />
            <div className={style.message__info}>
                <h4>
                    {user.displayName}
                    <span className={style.message__timestamp}>
                        {timestamp}
                    </span>
                </h4>

                <p>{message}</p>
            </div>
        </div>
    </>)
}

export default Message