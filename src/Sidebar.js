import { Avatar } from '@material-ui/core';
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlic';

 function Sidebar() {
const user=useSelector(selectUser);

        const recentItem=(topic)=>(
<div className='sidebar-recent'>
        <div className='side-recent-hash'>
                <p> <a className='hash'>#</a>{topic}</p>

        </div>
        </div>
        );
  return (
    <div className='sidebar-head'>
        <div className='sidebar-name'>
<img className='side-img-top' src='https://tse4.mm.bing.net/th?id=OIP.zvTH42gSclJtNydj25IWbAHaE7&pid=Api&P=0'/>
<Avatar className='sidebar-avatar'src={user.photoURL}/>
<h2>{user.displayName}</h2>
<h3>{user.email}</h3>
<div className='sidebar_stats'>
        <div className='sidebar-stat'>
<p> Who are all viewed?</p>
<p className='sidebar-stat-num'>2,340</p>
        </div>
<div className='sidebar-stat'>
           <p> Views on Post</p>
<p className='sidebar-stat-num'>2,340</p>
        </div>
        </div>
        </div>
        {/* <div className='sidebar_stats'>
        <div className='sidebar-stat'>
<p> Who are all viewed?</p>
<p className='sidebar-stat-num'>2,340</p>
        </div>
<div className='sidebar-stat'>
           <p> Views on Post</p>
<p className='sidebar-stat-num'>2,340</p>
        </div>
        </div> */}
       
        <div className='sidebar-bottom'>
          <p>Recent </p>  
            {recentItem("Reactjs")}
            {recentItem("Programming")}
            {recentItem("Drowler")}
            {recentItem("Freindship")}
            {recentItem("Nanban")}
        </div>
    </div>
  )
}
export default Sidebar;
