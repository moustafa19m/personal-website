import React, { useState } from "react";
import Twitter from "./Icons/Twitter";
import Instagram from "./Icons/Instagram";
import Linkedin from "./Icons/Linkedin";
import Facebook from "./Icons/Facebook";

export default function SocialsWidget() {
  return(
        <ul className="flex items-center column justify-between px-2 py-4 border solid rounded-full flex-col top-20 absolute left-60-px gap-y-4">
             <a className="cursor-pointer">
                <Twitter />
             </a>
             <a className="cursor-pointer">
                <Instagram />
             </a>
             <a className="cursor-pointer">
                <Linkedin />
             </a>
             <a className="cursor-pointer">
                <Facebook />
             </a>
        </ul>    
  );
}
