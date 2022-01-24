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
import db, { auth } from '../../firebase';
import { useEffect, useState } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const Sidebar = () => {

    //pulling up the user-data from the user layer - redux
    const user = useSelector(selectUser)
    const [channels, setChannels] = useState([])
    const [channelRef, setChannelRef] = useState(null)

    useEffect(() => {

        setChannels([])
        //using a async function inside useEffect 
        //since useEffect doesn't allow async operations to be performed over the callback function
        const fetchChannels = async () => {
            
            //snapshotting the data from channels collection
            const querySnapshot = await getDocs(collection(db, 'channels')) //channels = [{id: xyz, data: {channelName: pqr}}] - data structure
            
            //updating the channel list to be displayed
            querySnapshot.forEach(doc => {
                setChannels(oldChannels => [...oldChannels, {
                    id: doc.id,
                    channelName: doc.data().channelName
                }])
            })
        }

        fetchChannels()
    }, [channelRef])

    const handleAddChannel = async () => {

        //collecting the channelName from the user
        const channelName = prompt("Enter a new channel name:")
        if (channelName) {
            //storing the channelName in the channels collection
            const addRef = await addDoc(collection(db, 'channels'), {
                channelName: channelName
            })

            setChannelRef(addRef)
        }
    }

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

                    <AddIcon onClick={handleAddChannel} className={style.sidebar__addChannel} />
                </div>

                <div className={style.sidebar__channelsList}>
                    {channels.map((channel) => (<SidebarChannel key={channel.id} id={channel.id} channelName={channel.channelName} />))}
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
                <Avatar src={user.photo} onClick={() => { auth.signOut() }} />
                <div className={style.sidebar__profileInfo}>
                    <h3>{user.displayName}</h3>
                    <p>#{user.uid.substring(0, 6)}</p>
                </div>

                <div className={style.sidebar__profileIcons}>
                    <MicIcon sx={{
                        p: '10px'
                    }} />
                    <HeadsetIcon sx={{
                        p: '10px'
                    }} />
                    <SettingsIcon sx={{
                        p: '10px'
                    }} />
                </div>
            </div>
        </div>
    </>)
}

export default Sidebar  