import React, {useState} from 'react'
import './index.css'
import {BiArrowFromLeft} from 'react-icons/bi';
import {MdOutlinePeopleAlt} from 'react-icons/md';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import {AiOutlineArrowRight} from 'react-icons/ai';
const Index = () => {
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const addMessage = () => {
   if(newMessage.length) {
    setMessages([...messages, {creator: 'agosho', description:newMessage}]);
    setNewMessage('');
   }
  }
  return (
    <div className='chat'>
      <div className='stream-chat'>
        <BiArrowFromLeft/>
        <span>CHAT DEL STREAM</span>
        <MdOutlinePeopleAlt/>
      </div>
      <div className='gift'>
        <AiOutlineArrowLeft/>
        <span>¡Regala una suscripción para ser el n.° 1!</span>
        <AiOutlineArrowRight/>
      </div>
      <div className='chat-live'>
        <div className='comments'>
          {messages.length == 0 && <span>Te damos la bienvenida a la sala de chat</span> }
          {messages.length > 0 && messages.map(msg => {
            return (
            <span className='comment'> 
              <span className='comment_creator'>{msg.creator}</span>:<span className='comment_description'>{msg.description}</span> 
            </span>)
          })}
        </div>
        <div className='comment-box'>
          <input type="text" placeholder='Enviar un Mensaje' value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
          <button onClick={addMessage}>Enviar</button>
        </div>
      </div>
    </div>
  )
}

export default Index