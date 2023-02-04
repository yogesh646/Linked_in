import { Avatar } from '@material-ui/core';
import React from 'react'

function HeaderPoint({Icons,title,avatar,onClick}) {
  return (
    <div onClick={onClick} className='header-pointer'>
{
    Icons && <Icons className="header-point-avatar" />
}
{avatar && <Avatar className="header-point-avatar" src={avatar}/>}
<h2>{title}</h2>
    </div>
  )
}
export default HeaderPoint;
