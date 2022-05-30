import React from "react";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LoginIcon from "@mui/icons-material/Login";
import Image from "next/image";

export default function OurProject({ classes }) {
  return (
    <>
      <div className="Our_Project flex flex-col gap-8 xl:gap-[120px] px-6 mb-40 lg:flex-row items-center ">
        <div className="max-w-[593px]">
          <h2 className="text-[30px] text-[#FFE69A] leading-10 font-bold mb-5 sm:text-[40px]">
            Our Project
          </h2>
          <p className="text-[#F8F8F8] text-xl leading-6 font-normal mb-7 sm:text-2xl ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien
            viverra quam accumsan, faucibus dui, nisl, sed ullamcorper non. Sit
            amet, quam sed et cras sed rhoncus lectus diam. Faucibus tellus
            donec erat lectus.
          </p>
          <div className="text-white flex justify-end gap-2 sm:gap-4">
            <Button
              className={classes.btnSkip}
              endIcon={<ArrowForwardIosIcon />}
              size="medium"
              variant="outlined"
            >
              Skip
            </Button>
            <Button
              endIcon={<LoginIcon />}
              className={classes.btn}
              variant="contained"
            >
              Get Started
            </Button>
          </div>
        </div>
        <div>
          <Image
            className="max-w-[488px] max-h-[239px]"
            src="/images/Frame4.png"
            height="239px"
            width="488px"
          ></Image>
        </div>
      </div>
    </>
  );
}
