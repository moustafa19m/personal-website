import React from "react";
import NavItems from "../data/NavItems";
import NavLink from "./NavLink";
import BigButton from "./BigButton";

export default function Navbar() {
  return (
    <nav className="flex items-center bg-black lg:py-3 lg:px-20">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span>
          <img src="/favicon.svg" alt="logo" className="fill-current h-8 w-8 mr-2" />
        </span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 0h20v20H0z" fill="none"/>
            <path
              d="M0 4h20v1.5H0zM0 9.5h20V11H0zM0 15h20v1.5H0z"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="flex-row-reverse mx-6 w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          {
            NavItems.map((item, index) => (
              <NavLink key={index} label={item.label} path={item.path}/>
            )
          )}
      </div>
      <BigButton btnText="Hire Me Now >" onClick={() => console.log('Sign Up')}/>
    </nav>
  );
}
