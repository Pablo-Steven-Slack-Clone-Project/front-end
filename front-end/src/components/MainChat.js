import React, { useContext } from "react";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { AuthContext } from "./Auth"
import fireApp from '../base.js'
const firestore = fireApp.firestore();


const MainChat = () => {
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData(query, { idField: 'id' });
  // console.log("these are the messages", messages)

  return (<>
    <main>
      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
    </main>
  </>)
};

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;
  const messageClass = uid === useContext(AuthContext).uid ? 'sent' : 'received';
  console.log('chat message current user', useContext(AuthContext))

  return (<>
    <div className={`message ${messageClass}`}>
      <img style={{ width: '3%', borderRadius:15,}} src={photoURL || 'https://media-exp1.licdn.com/dms/image/C4D03AQE4tHxILDIRTA/profile-displayphoto-shrink_200_200/0?e=1610582400&v=beta&t=UqBSpNh_OnwIzDTX04QJTkoPFqqI7phAGy0SuzvsJSA'} alt="stock" />
      <span style={{}}>{text}</span>
    </div>
  </>)
}

export default MainChat;