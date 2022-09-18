import React, {useState} from 'react';
import './index.css';
import {BsFillPlayFill,BsFillVolumeUpFill} from 'react-icons/bs';
import {FiSettings} from 'react-icons/fi';
import {BiFullscreen,BiHeart} from 'react-icons/bi';
import {AiOutlineStar,AiFillHeart} from 'react-icons/ai';
const Index = ({channelSelected}) => {

  const [following,setFollowing] = useState(false);

  const CHANNEL = {
    id: 4,
    name: 'PuleAllinghiTLCM',
    description: 'Jugando con mis amigos! (Soy esquizo)',
    category: 'Gaming',
    views: '10',
    online: false,
    image: 'https://static-cdn.jtvnw.net/jtv_user_pictures/1972f5fd-c886-44c9-96f7-92e593e3354b-profile_image-70x70.png'
  };

  return (
    <div className="streamer_channel">
      <div className='channel_main'>
        <div>
          <span>SIN CONEXIÓN</span>
        </div>
        <div>
         
        </div>
        <div className='settings'>
          <div>
            <BsFillPlayFill/>
            <BsFillVolumeUpFill/>
          </div>
          <div>
            <FiSettings/>
            <BiFullscreen/>
          </div>
        </div>
      </div>
      <div className='streamer_info'>
        {channelSelected.id ? (
          <div className='stream a'>
            <img src={channelSelected.image} alt="Imagen del Streamer"/>
            <div>
              <span>{channelSelected.name}</span>
              <span>{channelSelected.description}</span>
              <span className='category'>{channelSelected.category}</span>
            </div>
        </div>
        ) : (
          <div className='stream b'>
            <img src={CHANNEL.image} alt="Imagen del Streamer"/>
            <div>
              <span>{CHANNEL.name}</span>
              <span>{CHANNEL.description}</span>
              <span className='category'>{CHANNEL.category}</span>
            </div>
          </div>
        )}
        <div className='actions'>
          <button className={following ? 'unfollow' : 'follow'} onClick={() => setFollowing(!following)}>
           {following ? <AiFillHeart /> : ( <> <BiHeart/> <span>Seguir</span> </> )  }  
          </button>
          <button className='subscribe'>
            <AiOutlineStar/> <span>Suscribirse</span> 
          </button>
        </div>
      </div>
    </div>
  )
}

export default Index;