import { useState } from "react";
import Image from "next/image";
import { makeStyles } from "@mui/styles";
import Form from "../components/HomeComponents/Form";
import OurProject from "../components/HomeComponents/OurProject";
import WhichPart from "../components/HomeComponents/WhichPart";
import Header from "../components/Header";
import Footer from "../components/Footer";

const useStyles = makeStyles({
  btn: {
    backgroundColor: "#71B9FF",
    borderRadius: "10px",
    "&:hover": {
      color: "#71B9FF",
      backgroundColor: "white",
    },
  },
  btnSkip: {
    borderRadius: "10px",
    borderColor: "white",
    color: "white",
    "&:hover": {
      color: "#71B9FF",
      borderColor: "#71B9FF",
    },
  },
});
export default function Home() {
  const [clicked, setClicked] = useState(false);
  const classes = useStyles();

  return (
    <>
      <Header />
      <div className="max-w-[1200px] my-0 mx-auto">
        <div className="First_Title text-center  flex justify-center mb-9 pt-24">
          <h1 className="text-[#F8F8F8] font-mono px-4 font-bold text-[26px] sm:text-[34px] max-w-[642px] leading-10">
            Work with thousands of association With just few clicks !
          </h1>
        </div>
        <div
          className="text-center mb-16
        "
        >
          <Image src="/icons/icon.svg" height="267px" width="625px" />
        </div>
        <OurProject classes={classes} />

        {clicked ? (
          <Form classes={classes} clicked={clicked} setClicked={setClicked} />
        ) : (
          <WhichPart
            classes={classes}
            setClicked={setClicked}
            clicked={clicked}
          />
        )}
        <Footer />
      </div>
    </>
  );
}
