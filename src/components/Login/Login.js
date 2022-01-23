import style from './Login.module.css'
import { auth, provider, signInWithPopup } from './../../firebase'
import { Button } from '@mui/material'

const Login = () => {

    const signIn = () => {
        //do google login
        signInWithPopup(auth, provider)
        .catch(err => (alert('Error')))
    }

    return (<>
        <div className={style.login}>
            <div className={style.logo}>
                <img src="https://logowik.com/content/uploads/images/discord-new-20218785.jpg" alt="Discord Logo" />
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    </>);
}

export default Login;