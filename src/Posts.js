import { Avatar } from '@material-ui/core'
import { ChatOutlined, Send, ShareOutlined, ThumbsUpDown, ThumbUpSharp } from '@material-ui/icons'
import React from 'react';
import InputOption from './InputOption';

export default function Posts({name,message,description,photoUrl,timestamp}) {
  return (
    <div className='posts'>
        <div className='post-head'>
            <Avatar src={photoUrl} />
          <div className='post-inner'>
          <a>{name}</a>
          <br/>
          <a>{description}</a>
          <a className='time'>{timestamp}</a>
            </div> 

        </div>
        <div className='post-body'>
<p>{message}</p>
        </div>
        <div className='post-bottom'>
            
        <InputOption title="Like" Icon={ThumbUpSharp} color="gray"/>
<InputOption title="Share" Icon={ShareOutlined} color="gray"/>
<InputOption title="Chat" Icon={ChatOutlined} color="gray"/>
<InputOption title="Send" Icon={Send} color="gray"/>

        </div>
    </div>
  )
}
