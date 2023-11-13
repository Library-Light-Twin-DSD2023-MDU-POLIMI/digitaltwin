import React from 'react';
import { BookOpenIcon } from '@heroicons/react/24/solid';

const Header = () => {
  return (
    <div className="flex items-center bg-cyan-950 h-14">
      <button className="bg-gray-400 text-white flex items-center justify-center w-60 h-full rounded-tr-md rounded-br-md shrink-0">
        <BookOpenIcon className="h-7 w-7 shrink-0" />
      </button>
      <h1 className="text-2xl font-bold text-white flex-grow pl-8 ml-20">Library Lightning Asset Management System</h1>
    </div>
  )
}

export default Header;
