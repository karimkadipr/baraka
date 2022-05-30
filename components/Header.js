import Image from "next/image";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";

const Header = () => {
  return (
    <header className="flex justify-between items-center max-w-[1200px] mx-auto py-6 px-4 relative z-10">
      <div>
        <img src="/icons/Logo.svg" height="47" width="169" />
      </div>
      <ul className="md:flex hidden justify-between lg:gap-16 gap-8 text-white">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">About us</li>
        <li className="cursor-pointer">Gallery</li>
        <li className="cursor-pointer">Network</li>
      </ul>
      <div className="md:flex hidden gap-2">
        <Image src="/icons/search.svg" height="32" width="32" />
        <input
          className="border-b border-b-white bg-transparent text-white placeholder-white"
          placeholder="Search"
        />
      </div>
      <div className="block md:hidden">
        <IconButton>
          <MenuIcon className="text-white" />
        </IconButton>
      </div>
    </header>
  );
};

export default Header;
