import {  BusinessCenter, Chat, HomeOutlined, Search, SupervisorAccount, AddCircleOutline } from '@material-ui/icons'

import React from 'react'
import HeaderPoint from './HeaderPoint'
import inked from './inked.jpg'
import hike from './hike.jpg'
import { useDispatch } from 'react-redux'
import { auth } from './firebase'

export default function Header() {
  const dispatch=useDispatch();

  const logout=()=>{
    dispatch(logout());
    auth.signOut();
  }

  return (
    <div className='header'>
      
        <div className='head-search-box'>
            <img className='header-img' alt='headimg' src={inked}/>
            <Search className='search-box'/>
            <input className='head-input-search' type="text"/>
         
        </div>

        <div className='header-point'>
        <HeaderPoint  Icons={HomeOutlined} title="Home"/>
        <HeaderPoint Icons={SupervisorAccount} title="My network"/>
        <HeaderPoint Icons={BusinessCenter} title="Jobs"/>
        <HeaderPoint Icons={Chat} title="Messaging"/>
        <HeaderPoint Icons={AddCircleOutline} title="Notifications"/>
        <HeaderPoint avatar={hike} title="Profile" onClick={logout}/>
        </div>
        </div>
     
  )
}

