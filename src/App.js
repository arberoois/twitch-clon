import {useState} from 'react'
import './App.css';
import Header from './components/Header';
import Channels from './components/Channels';
import Channel from './components/Channel';
import Chat from './components/Chat'
function App() {

  const [channelSelected, setChannelSelected] = useState({});
  return (
    <>
      <Header/>
      <div className='father'>
        <Channels setChannelSelected={setChannelSelected}/>
        <Channel channelSelected={channelSelected}/>
        <Chat/>
      </div>
    </>
  );
}

export default App;
