import React from "react";
import styles from "../../styles/Home.module.css";

export default function Form({ classes, clicked, setClicked }) {
  return (
    <>
      <div>
        <div className="flex justify-center mb-28 ">
          <h3 className="text-white text-center text-3xl s:text-5xl font-bold leading-[48px] max-w-[698px] ">
            Oh ! Thank you so much for your
            <span className="text-[#71B9FF]"> Contribution</span> !
          </h3>
        </div>
      </div>
      <div className="Form flex flex-col justify-center items-center  bg-[#1A1A1A] mb-16 relative lg:gap-x-80 lg:grid lg:grid-cols-2 ">
        <div className="first lg:px-24 px-4 pt-24 lg:py-28">
          <form>
            <div className="mb-[50px] relative  s:w-[383px] ">
              <label className="text-2xl font-normal mb-2 text-white flex column  ">
                Search
              </label>
              <input className=" bg-[#5C5C5A] w-full h-[47px] rounded-xl outline-none p-4 pl-10"></input>
              <span className={styles.selectSearch}></span>
            </div>
            <div className="mb-[50px] relative  s:w-[383px]">
              <label className="text-2xl font-normal mb-2 text-white flex column ">
                Wilaya
              </label>
              <select
                style={{ position: "relative" }}
                type="select"
                className={styles.selectInput}
              ></select>
              <span className={styles.selectArrow}></span>
            </div>
            <div className="mb-[50px] relative  s:w-[383px] ">
              <label className="text-2xl font-normal mb-2 text-white flex column ">
                Region
              </label>
              <select
                style={{ position: "relative" }}
                className={styles.selectInput}
              ></select>
              <span className={styles.selectArrow}></span>
            </div>
          </form>
        </div>
        <div className="max-w-[339px] py-4 lg:py-40 relative mb-8 px-4">
          <span className={styles.Ellipse}></span>
          <h4 className="text-white text-[38px] font-bold leading-10 mb-7">
            Association profile
          </h4>
          <p className="text-white text-2xl ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            sagittis, tortor semper sagittis scelerisque. Auctor convallis eu in
            montes, sollicitudin arcu.
          </p>
        </div>
        <div className="third text-white  col-span-2 text-center ">
          <button className="bg-[#C2E1FF] text-[#476072] font-bold text-3xl leading-9 text-center  lg:w-full h-[80px] rounded-b-2xl lg:self-stretch relative px-6 rounded-2xl">
            Submit <span className={styles.check}></span>
          </button>
        </div>
        <div onClick={() => setClicked(!clicked)} className={styles.SaveDiv}>
          <span className={styles.Save}></span>
        </div>
      </div>
    </>
  );
}
