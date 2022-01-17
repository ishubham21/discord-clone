import style from './Sidebar.module.css'

const Sidebar = () => {
    return(<>
        <div className={style.sidebar}>
            <div className={style.sidebar__top}>
                <h3>Discord Server</h3>
            </div>
        </div>
    </>)
}

export default Sidebar