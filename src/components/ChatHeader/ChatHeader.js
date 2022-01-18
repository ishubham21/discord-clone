import style from './ChatHeader.module.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import EditLocationRoundedIcon from '@mui/icons-material/EditLocation';
import NotificationsIcon from '@mui/icons-material/Notifications'
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAlt'
import SendRoundedIcon from '@mui/icons-material/SendRounded'
import HelpRoundedIcon from '@mui/icons-material/HelpRounded'

const ChatHeader = () => {
    return ( <>
        <div className={style.chatHeader}>
            <div className={style.chatHeader__left}>
                <h3>
                    <span className={style.chatHeader__hash}>
                        #
                    </span>
                    Test Channel Name
                </h3>
            </div>
            <div className={style.chatHeader__right}>
                <NotificationsIcon sx={{
                    p: '10px',
                    cursor: 'pointer',
                    "&:hover": {
                      color: '#fff'
                    }
                }}/>
                <EditLocationRoundedIcon sx={{
                    p: '10px',
                    cursor: 'pointer',
                    "&:hover": {
                      color: '#fff'
                    }
                }}/>
                <PeopleAltRoundedIcon sx={{
                    p: '10px',
                    cursor: 'pointer',
                    "&:hover": {
                      color: '#fff'
                    }
                }}/>

                <div className={style.chatHeader__search}>
                    <input type="text" placeholder='Search'/>
                    <SearchRoundedIcon sx={{
                    p: '10px',
                    cursor: 'pointer',
                    "&:hover": {
                      color: '#fff'
                    }
                }}/>
                </div>

                <SendRoundedIcon sx={{
                    p: '10px',
                    cursor: 'pointer',
                    "&:hover": {
                      color: '#fff'
                    }
                }}/>
                <HelpRoundedIcon sx={{
                    p: '10px',
                    cursor: 'pointer',
                    "&:hover": {
                      color: '#fff'
                    }
                }}/>
            </div>
        </div>
    </> );
}
 
export default ChatHeader;