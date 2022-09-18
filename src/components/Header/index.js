import React from 'react';
import './index.css';
import {BsListUl, BsSearch, BsTwitch} from 'react-icons/bs';
import {TbCrown} from 'react-icons/tb';
import {GiChest} from 'react-icons/gi';
import {BiMessageAlt} from 'react-icons/bi'
import Logo from '../../static/images/logo.png'
const index = () => {
  return (
    <header>
        <div>
            <BsTwitch/>
            <span>Siguiendo</span>
            <span>Explorar</span>
            <BsListUl/>
        </div>
        <div className='header__search'>
            <input type="text" placeholder='Buscar'/>
            <BsSearch/>
        </div>
        <div>
            <TbCrown/>
            <GiChest/>
            <BiMessageAlt/>
            <img src={Logo} alt="Logo Persona" />
        </div>
    </header>
  )
}

export default index