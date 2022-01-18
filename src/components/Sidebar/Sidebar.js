import style from './Sidebar.module.css'
import SidebarChannel from './../SidebarChannel/SidebarChannel'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add'
import { InfoOutlined, SignalCellularAltOutlined } from '@mui/icons-material';
import CallIcon from '@mui/icons-material/Call'

const Sidebar = () => {

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
        </div>
    </>)
}

export default Sidebar  