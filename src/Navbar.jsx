import React, { useState } from "react";
import NavItems from "../data/NavItems";
import NavLink from "./NavLink";
import BigButton from "./BigButton";
import custom from "../consts/tailwind.json"
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="flex items-center justify-between py-3 px-6">
      <a href="/" className="flex items-center flex-shrink-0 text-white">
        <span>
          <img src="/favicon.svg" alt="logo" className="fill-current h-8 w-8 cursor-pointer" />
        </span>
      </a>
      <div className="md:hidden">
        <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
      </div>
      {/* <HamburgerMenu className={custom.showSmallOnly}/> */}
      {/* <div className="md:flex md:items-center md:flex-row md:static md:z-auto
      mx-6 absolute z-[-1]"> */}
      <ul className={`md:flex-row md:flex md:items-center md:static md:z-auto md:w-auto md:bg-transparent md:pl-0 md:bg-opacity-100 md:opacity-100 
         z-[-1] block bg-black w-full absolute left-0 top-14 pl-7 bg-opacity-75 ${isOpen? 'opacity-100 transition-all ease-in duration-300': 'opacity-0'}`}>
          {
            NavItems.map((item, index) => (
              <li key={index} className="md:mx-6 my-6 md:my-0">
                <NavLink key={index} label={item.label} path={item.path}/>
              </li>
            )
          )}
          <li>
          <BigButton className="md:ml-6 my-6 md:my-0"  btnText="Hire Me Now >" onClick={() => console.log('Sign Up')}/>
          </li>
        </ul>
      {/* </div> */}
    </nav>
  );
}
