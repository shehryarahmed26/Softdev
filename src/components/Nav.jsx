import React, { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button, link} from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";
import { Link } from 'react-router-dom'

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [shadow, setshadow] = useState(false)
    window.addEventListener('scroll', () => {
        if(window.scrollY > 30) {
            setshadow(' shadow-md')
        }
        else {
            setshadow(false)
        }
    })
    const handlemenu = () => {
     console.log('yes');
     
    }

  const menuItems = [
    "Home",
    "Aboutus",
    "Services",
    "Portfolio",
    "Contactus",
    // "Deployments",
    // "My Settings",
    // "Team Settings",
    // "Help & Feedback",
    // "Log Out",
  ];

  return (
    <Navbar className={`bg-white w-full px-10 ${shadow}`} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <Link to={'/'}><img className="w-24 md:w-36" src="/Images/logo.jfif" alt="" /></Link>
          {/* <p className="font-bold text-inherit">ACME</p> */}
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        <NavbarItem>
          <Link to={'/'} className="hover:text-blue-500 transition-all" color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to={'/aboutus'} href="#" className="hover:text-blue-500 transition-all" color="foreground" aria-current="page">
            About us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to={'/services'} className="hover:text-blue-500 transition-all" color="foreground" href="#">
            Services
          </Link>
        </NavbarItem>
        {/* <NavbarItem>
          <Link to={'/portfolio'} className="hover:text-blue-500 transition-all" color="foreground" href="#">
            Portfolio
          </Link>
        </NavbarItem> */}
        <NavbarItem>
          <Link to={'/contactus'} className="hover:text-blue-500 transition-all" color="foreground" href="#">
            Contact us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link to={`${item}`}
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              <p onClick={handlemenu}>{item}</p>
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
