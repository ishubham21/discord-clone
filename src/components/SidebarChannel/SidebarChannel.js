import style from './SidebarChannel.module.css'

const SidebarChannel = ({ id, channel }) => {
    return (<>
        <div className={style.sidebarChannel}>
            <h4>
                <span className={style.sidebarChannel__hash}>#</span>
                Youtube
            </h4>
        </div>
    </>)
}

export default SidebarChannel