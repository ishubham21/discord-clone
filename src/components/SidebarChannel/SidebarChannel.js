import { useDispatch } from 'react-redux'
import style from './SidebarChannel.module.css'
import { setChannelInfo } from '../../features/appSlice'

const SidebarChannel = ({ id, channelName }) => {

    const dispatch = useDispatch()

    //each time a channelName is clicked in the sidebar, we are pushing it's information into the app layer 
    //this information is getting pulled in the <Chat /> component and getting updated each time a new channel is clicked
    const handleChannelClick = () => { 
        //dispatch is used to set payload information in the data layer - app layer in this case
        dispatch(setChannelInfo({
            channelId: id,
            channelName: channelName
        }))
    }

    return (<>
        <div className={style.sidebarChannel} onClick={handleChannelClick}>
            <h4>
                <span className={style.sidebarChannel__hash}>#</span>
                {channelName}
            </h4>
        </div>
    </>)
}

export default SidebarChannel