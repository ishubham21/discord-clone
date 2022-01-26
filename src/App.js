import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Chat from './components/Chat/Chat';
import Login from './components/Login/Login';
import Sidebar from './components/Sidebar/Sidebar';
import { login, logout, selectUser } from './features/userSlice'
import { auth } from './firebase';

function App() {

  const dispatch = useDispatch()

  //useSelector hook is used to pull up information from the data layer - user layer in this case
  const user = useSelector(selectUser)  //user that controls navigation between the components

  const checkAuthState = useCallback(() => {

    //if the user logs in, a change in authState is detected
    //we call the login action on user data layer, and pass the details of the user as payload
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName
        }))
      }

      //if the user logs out, we call the
      else {
        dispatch(logout())
      }
    })
  }, [dispatch])

  useEffect(() => {
    checkAuthState()
  }, [checkAuthState])

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
