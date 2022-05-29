import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center py-16 border-t-[3px] border-t-[#476072] text-white">
      <div className="flex items-center mb-4">
        <div className="border-r border-r-[#476072] pr-3">
          <Image src="/icons/logo.svg" height="31" width="113" />
        </div>
        <p className="pl-3 text-2xl font-bold">Corporate</p>
      </div>
      <p className="font-bold text-[#808080] leading-5 text-center mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, ut cras
        commodo, nunc. At aliquam dolor, sed ligula malesuada mi blandit
        pellentesque elementum. Elit at sed scelerisque magna amet.
      </p>
      <ul className="flex gap-8 font-bold text-[#C2E1FF]">
        <li>Policies</li>
        <li>Contact</li>
        <li>FAQ</li>
      </ul>
    </footer>
  );
};

export default Footer;
