import React from 'react';
import { FaHome, FaInfoCircle, FaShoppingCart } from 'react-icons/fa';
import './header.css';

function Header() {
  return (
    <div className="bg-sky-300 flex justify-between items-center h-20 text-center p-6 shadow-2xl">
      <div className="text-2xl ml-10"><h1>TokoKu</h1></div>
      <div className="shadow-md"> 
        <input type="search" name="" id="" className="w-[30rem] h-[1.9rem] rounded-lg" />
      </div>
      <div className="flex space-x-3">
        <div className="flex flex-wrap"><FaHome size={25}/><a href="/">Home</a></div>
        <div className="flex flex-wrap"><FaInfoCircle size={25}/><a href="/about">About</a></div>
        <div className="flex flex-wrap">
          <FaShoppingCart size={25}/>
          <a href="/checkout">Keranjang</a> 
        </div>
      </div>
      <div className="profil">
        <img src="./assets/img/loving.png" alt="Profil" className="bg-white w-4/4 h-[4rem] pb-[1rem] rounded-full" />
      </div>
    </div>
  )
}

export default Header;
