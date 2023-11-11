import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpenReader } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className="flex items-center bg-black-pearl-950 h-14">
      <button className="bg-black-pearl-200 text-black-pearl-950 flex items-center justify-center w-1/4 h-full rounded-tr-md rounded-br-md">
        <FontAwesomeIcon icon={faBookOpenReader} className="w-1/2 h-1/2 text-black-pearl-950"/>
      </button>
      <h1 className="text-2xl font-bold text-black-pearl-100 flex-grow pl-4 ml-20">Library Lightning Asset Management System</h1>
    </div>
  )
}

export default Header;
