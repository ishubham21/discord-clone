import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Chat from './components/Chat/Chat';
import Login from './components/Login/Login';
import Sidebar from './components/Sidebar/Sidebar';
import { login, logout, selectUser } from './features/userSlice'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase';

function App() {

  const dispatch = useDispatch()
  const user = useSelector(selectUser)  //user than controls navigation between the components
  const [userFirebaseData, loading, error] = useAuthState(auth)

  useEffect(() => {
    if (error) {
      console.log(error)
    }
    else {
      if (!loading) {
        dispatch(login({
          uid: userFirebaseData.uid,
          photo: userFirebaseData.photoURL,
          email: userFirebaseData.email,
          displayName: userFirebaseData.displayName
        }))
      }
      else{
        dispatch(logout())
      }
    }
  }, [userFirebaseData, error, loading, dispatch])

  return (
    <div className="app">
      {user ?
        (<>
          <Sidebar />
          <Chat />
        </>) :
        (<Login />)
      }
    </div>
  );
}

export default App;
