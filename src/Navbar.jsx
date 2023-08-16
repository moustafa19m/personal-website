import React, { useState } from "react";
import NavItems from "../data/NavItems";
import NavLink from "./NavLink";
import BigButton from "./BigButton";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="flex items-center justify-between py-3 px-3 mx-auto">
      <a href="/" className="flex items-center flex-shrink-0 text-white">
        <span>
          <img src="/favicon.svg" alt="logo" className="fill-current h-8 w-8 cursor-pointer" />
        </span>
      </a>
      <div className="md:hidden">
        <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
      </div>
      <ul className={`md:flex-row md:flex md:items-center md:static md:z-auto md:w-auto md:bg-transparent md:pl-0 md:bg-opacity-100 md:opacity-100 
         block bg-black w-full absolute left-0 top-12 pl-7 bg-opacity-95 ${isOpen? 'opacity-100 transition-all ease-in duration-300': 'opacity-0'}`}>
          {
            NavItems.map((item, index) => (
              <li key={index} className="md:mx-6 my-6 md:my-0">
                <NavLink key={index} label={item.label} path={item.path}/>
              </li>
            )
          )}
          <li>
          <BigButton className="md:ml-6 my-6 md:my-0"  btnText="Download Resume" onClick={() => console.log('Sign Up')}/>
          </li>
        </ul>
    </nav>
  );
}
