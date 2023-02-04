import { CalendarTodayOutlined, Create, EventNote, Image, SubscriptionsOutlined, VideoCallOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import database from './firebase';
import firebase from 'firebase'
import InputOption from './InputOption';
import Posts from './Posts';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlic';

 function Feeds() {
  const user=useSelector(selectUser);
    const[posts,setposts]=useState([]);
const [input, setinput] = useState("");
    useEffect(() => {
   database.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot)=>{
setposts(snapshot.docs.map((doc)=>(
  {
    id:doc.id,
    data:doc.data()
  }
)
))
   })
    }, [])
    

const sendpost=e=>{
    e.preventDefault();
    console.log("clicked");
    database.collection('posts').add({
      name:user.displayName,
      description:"display",
      message:input,
      photoUrl:user.photoURL,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    })
setinput('')
}



  return (
    <div className='feed'>
        <div className='feed-head'>
         <form className='form-feed'>
            <Create className='create-feed'/>
            <input className='feed-search' type='text' placeholder='Search' value={input} onChange={(e)=>setinput(e.target.value)}/>
<button className='feed-submit' onClick={sendpost} type='submit'>Send</button>
</form>
        </div>
        <div className='feed-bar'>
          
            <InputOption title="Photos" Icon={Image} color="lightskyblue"/>
<InputOption Icon={SubscriptionsOutlined} title="Videos"  color="red"/>
<InputOption title="Event" Icon={EventNote} color="gray"/>
<InputOption title="Writearticle" Icon={CalendarTodayOutlined} color="darkgreen"/>
    
        </div>
        {posts.map(({id,data:{name,message,description,photoUrl}})=>(
           <Posts
            key={id}
            name={name}
            description={description}
            message={message}
photoUrl={photoUrl}
// timestamp={timestamp}
            />
 ))}

    </div>
  )
}
export default Feeds;
