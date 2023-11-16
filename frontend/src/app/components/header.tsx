'use client'

import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";


export default function Header() {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">Lightning Asset Manager</p>
      </NavbarBrand>
    </Navbar>
  );
}