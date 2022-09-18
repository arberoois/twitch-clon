import React, {useState} from 'react'
import './index.css'
import {BiArrowFromRight} from 'react-icons/bi'
import {TbArrowsUpDown} from 'react-icons/tb'
import {BsFillCircleFill} from 'react-icons/bs'

const Index = ({setChannelSelected}) => {

  const [isMore, setIsMore] = useState(false);


  const FOLLOW_CHANNELS = [
    
    {
      id: 1,
      name: 'dur4zn1ll0',
      category: 'Axie Infinity',
      views: '250',
      description: 'Jugando Axie Infinity to the moon!',
      online: true,
      image: 'https://static-cdn.jtvnw.net/jtv_user_pictures/d9c4d5c4-5837-4d39-8537-6e7e157d5977-profile_image-70x70.png'
    },
    {
      id: 2,
      name: 'DAESHINHO',
      category: 'Axie Infinity',
      description: 'Jugando Axie Top 1',
      views: '179',
      online: true,
      image: 'https://static-cdn.jtvnw.net/jtv_user_pictures/e8f73d79-49eb-4697-924d-8085a3d06b00-profile_image-70x70.png'
    },
    {
      id: 3,
      name: 'agosho',
      category: 'Desarrollo de Software',
      description: 'Codeando un Clon de Twitch',
      views: '30',
      online: true,
      image: 'https://static-cdn.jtvnw.net/jtv_user_pictures/ac6d3429-7631-46d7-97f9-787fe44da920-profile_image-300x300.png'
    },
    {
      id: 4,
      name: 'PuleAllinghiTLCM',
      category: 'Gaming',
      description: 'Soy medio esquizofrenico y juego juegos de Zombies!',
      views: '10',
      online: false,
      image: 'https://static-cdn.jtvnw.net/jtv_user_pictures/1972f5fd-c886-44c9-96f7-92e593e3354b-profile_image-70x70.png'
    },
   
  ];

  const RECOMENDED_CHANNELS = [
    {
      id: 1,
      name: 'ibai',
      category: 'Fall Guys',
      views: '25.350',
      image: 'https://static-cdn.jtvnw.net/jtv_user_pictures/574228be-01ef-4eab-bc0e-a4f6b68bedba-profile_image-70x70.png'
    },
    {
      id: 2,
      name: 'auronplay',
      category: 'Charlando',
      views: '72.427',
      image: 'https://static-cdn.jtvnw.net/jtv_user_pictures/ec898e4a-e0df-4dc0-a99d-7540c6dbe1e8-profile_image-70x70.png'
    },
    {
      id: 3,
      name: 'SLAKUN10',
      category: 'Charlando',
      views: '16.914',
      image: 'https://static-cdn.jtvnw.net/jtv_user_pictures/e5275ba1-1903-4cd6-a066-3a80b87d22cf-profile_image-70x70.png'
    },
    {
      id: 4,
      name: 'AxieInfinity',
      category: 'Axie Infinity',
      views: '653.942',
      image: 'https://static-cdn.jtvnw.net/jtv_user_pictures/97b538fb-cd50-4100-ba1b-d48e5e8f0e33-profile_image-70x70.png'
    },
  ];

  const updateChannelSelected = (channel) => {
    setChannelSelected(channel);
  }
  return (
    <div className='channels'>
      <div>
        <span>Para ti</span>
        <BiArrowFromRight/>
      </div>
      <div>
        <span>CANALES QUE SIGO</span>
        <TbArrowsUpDown/>
      </div>
      <div className='follow_channels'>
        {FOLLOW_CHANNELS.map((channel) => {
          return (
            <div className='channel' key={channel.id} onClick={() => updateChannelSelected(channel)} >
              <div className='data'>
              <img src={channel.image} alt="Logo Canal que sigo"/>
              <div className='description'>
                <h2>{channel.name}</h2>
                <p>{channel.category}</p>
              </div>
            </div>
              {channel.online ? (
                <div className='live'>
                  <BsFillCircleFill />
                  <span>{channel.views}</span>
                </div>
              ) : (
                <div className='offline'>
                   <span>Desconectado</span>
                </div>
              )}
              
            </div>
          )
        })}
      </div>
      <span className='more' onClick={() => setIsMore(!isMore)}>{isMore ? 'Mostrar menos' : 'Mostrar más'}</span>
      <div>
        <span>CANALES RECOMENDADOS</span>
      </div>
      <div className='follow_channels'>
        {RECOMENDED_CHANNELS.map((channel) => {
          return (
            <div className='channel' key={channel.id}>
              <div className='data'>
              <img src={channel.image} alt="Logo Canal que sigo"/>
              <div className='description'>
                <h2>{channel.name}</h2>
                <p>{channel.category}</p>
              </div>
              
              </div>
                <div className='live'>
                  <BsFillCircleFill />
                  <span>{channel.views}</span>
                </div>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default Index