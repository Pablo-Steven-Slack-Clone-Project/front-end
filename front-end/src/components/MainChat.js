import React, { useContext, useRef, useEffect} from "react";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { AuthContext } from "./Auth"
import fireApp from '../base.js'

import '../App.css'

const firestore = fireApp.firestore();


const MainChat = () => {
  const dummy = useRef()
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limitToLast(25)
  const [messages] = useCollectionData(query, { idField: 'id' });
  console.log(messages)

  useEffect(() => {
    setTimeout(()=>{
      dummy.current.scrollIntoView({ behavior: 'smooth' })
     }, 1000)
  }, [])

  useEffect(() => {
      dummy.current.scrollIntoView({ behavior: 'smooth' })
  }, [messages])


  return (
  <>
    <main>
      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
      <span ref={dummy}></span>
    </main>
  </>)
};

function ChatMessage(props) {
  const { text, uid } = props.message;
  let photoHolder
  const messageClass = uid === useContext(AuthContext).currentUser.uid? 'sent' : 'received';
  if(messageClass==='received')
  { 
    photoHolder='https://avatars1.githubusercontent.com/u/51976194?s=460&u=44b1c04deb6995b58523c9192945fe1ca646fe6c&v=4'
  }
  else{
    photoHolder='https://media-exp1.licdn.com/dms/image/C4D03AQE4tHxILDIRTA/profile-displayphoto-shrink_200_200/0?e=1610582400&v=beta&t=UqBSpNh_OnwIzDTX04QJTkoPFqqI7phAGy0SuzvsJSA'
   }
  
  return (<>

      <div className={`${messageClass}`}>
      <div className="icon" >
      <img src={photoHolder} alt="stock" />
      </div>
  <span className='text'>{text}</span>
      
      
      </div>
  </>)
}

export default MainChat;