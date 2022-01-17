import style from './Sidebar.module.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add'

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
            </div>

        </div>
    </>)
}

export default Sidebar  