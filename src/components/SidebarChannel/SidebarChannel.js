import style from './SidebarChannel.module.css'

const SidebarChannel = ({ id, channelName }) => {
    return (<>
        <div className={style.sidebarChannel}>
            <h4>
                <span className={style.sidebarChannel__hash}>#</span>
                {channelName}
            </h4>
        </div>
    </>)
}

export default SidebarChannel