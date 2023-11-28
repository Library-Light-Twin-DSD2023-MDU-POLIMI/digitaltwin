'use client'

import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";


export default function Header() {
  return (
    <div className="flex items-center bg-cyan-950 h-14">
      <button className="text-white flex items-center justify-center w-60 h-full shrink-0">
      </button>
      <h1 className="text-2xl font-bold text-white flex-grow pl-8 ml-20">Library Lightning Asset Management System</h1>
    </div>
  );
}