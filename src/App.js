import React, { useEffect } from 'react';
import logo from './logo.svg';
import Header from './Header';
import Sidebar from './Sidebar';
import Feeds from './Feeds';
import { login, logout } from './features/userSlic';
// import { Counter } from './features/';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/userSlic';
import Login from './Login';
import { auth } from './firebase';

function App() {
  const user=useSelector(selectUser);
const dispatch=useDispatch();
  useEffect(() => {
auth.onAuthStateChanged((userAuth)=>{
  if(userAuth){
dispatch(login({
  email:userAuth.user.email,
  id:userAuth.user.uid,
  displayName:userAuth.user.displayName,
  photoUrl:userAuth.user.photoURL
}));
  }else{
dispatch(logout());
  }
})
  }, [])
  
  return (
    <div className="App">
<Header/>
{!user ? <Login/>:
<div>
<div className='side'>
<div className='side-sub'>
 <Sidebar/>
 </div> 
<Feeds/>
</div>
</div>
}

    
    </div>
  );
}

export default App;
