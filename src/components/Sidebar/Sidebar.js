import style from './Sidebar.module.css'
import SidebarChannel from './../SidebarChannel/SidebarChannel'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add'
import { InfoOutlined, SignalCellularAltOutlined } from '@mui/icons-material';
import CallIcon from '@mui/icons-material/Call'
import Avatar from '@mui/material/Avatar'
import MicIcon from '@mui/icons-material/Mic';
import SettingsIcon from '@mui/icons-material/Settings';
import HeadsetIcon from '@mui/icons-material/Headset';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

const Sidebar = () => {

    const user = useSelector(selectUser )
    console.log(user)

    return (<>
        <div className={style.sidebar}>

            <div className={style.sidebar__top}>
                <h3>Discord Server</h3>
                <ExpandMoreIcon />
            </div>

            <div className={style.sidebar__channels}>
                <div className={style.sidebar__channelsHeader}>
                    <div className={style.sidebar__header}>
                        <ExpandMoreIcon />
                        <h4>Text Channels</h4>
                    </div>

                    <AddIcon className={style.sidebar__addChannel} />
                </div>

                <div className={style.sidebar__channelsList}>
                    <SidebarChannel />
                </div>
            </div>

            <div className={style.sidebar__voice}>
                <SignalCellularAltOutlined
                    className={style.sidebar__voiceIcon}
                    fontSize="large"
                />

                <div className={style.sidebar__voiceInfo}>
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>

                <div className={style.sidebar__voiceIcons}>
                    <InfoOutlined sx={{
                        padding: '10px'
                    }} />
                    <CallIcon sx={{
                        padding: '10px'
                    }} />
                </div>
            </div>

            <div className={style.sidebar__profile}>
                <Avatar src={user.photo}/>
                <div className={style.sidebar__profileInfo}>
                    <h3>Shubham Gautam</h3>
                    <p>#thisIsMyID</p>
                </div>

                <div className={style.sidebar__profileIcons}>
                    <MicIcon sx={{
                        p: '10px'
                    }}/>
                    <HeadsetIcon sx={{
                        p: '10px'
                    }}/>
                    <SettingsIcon sx={{
                        p: '10px'
                    }}/>
                </div>
            </div>
        </div>
    </>)
}

export default Sidebar  