import Image from "next/image";
import styles from "../styles/Home.module.css";
import { makeStyles } from "@mui/styles";
import Form from "./HomeComponents/Form";
import Header from "./HomeComponents/Header";
import WhichPart from "./HomeComponents/WhichPart";
import { useState } from "react";

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
    <div className="bg-[#151513]">
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
          <Image src="/icons/icon.svg" height="267px" width="625.42px" />
        </div>
        <Header classes={classes} />

        {clicked ? (
          <Form classes={classes} clicked={clicked} setClicked={setClicked} />
        ) : (
          <WhichPart
            classes={classes}
            setClicked={setClicked}
            clicked={clicked}
          />
        )}
      </div>
    </div>
  );
}
