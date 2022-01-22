import { Avatar } from '@mui/material'
import style from './Message.module.css'

const Message = () => {
    return (<>
        <div className={style.message}>
            <Avatar />
            <div className={style.message__info}>
                <h4>
                    Shubham
                    <span className={style.message__timestamp}>timestamp here</span>
                </h4>

                <p>This is a message</p>
            </div>
        </div>
    </>)
}

export default Message