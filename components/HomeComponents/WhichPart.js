import React from "react";
import styles from "../../styles/Home.module.css";

export default function WhichPart({ setClicked, clicked }) {
  return (
    <>
      <div>
        <div className="flex justify-center mb-28">
          <h3 className="text-white text-center text-3xl font-bold leading-[48px] max-w-[698px] px-2 md:px-0 sm:text-5xl">
            Which area you want to be
            <span className="text-[#71B9FF]"> part in</span> ?
          </h3>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-12 mb-8 lg:grid-cols-2  ">
        <div className="Donateur relative flex flex-col justify-end items-center bg-[#1A1A1A] h-[386px]  xl:max-w-[587px] px-4  ">
          <div className={styles.SaveDivSmall}>
            <span className={styles.SaveSmall}></span>
          </div>
          <h2 className=" text-white text-center text-3xl font-bold leading-10 mb-3 sm:text-4xl">
            Donateur
          </h2>
          <p className="text-white text-center font-normal text-2xl leading-9 max-w-[353px] mb-10 s:text-3xl">
            Want to help others and contribute to their happiness
          </p>
          <div className="button self-stretch">
            <button
              onClick={() => setClicked(!clicked)}
              className="bg-[#C2E1FF] text-[#476072] font-bold text-2xl leading-9 text-center  w-full h-[80px] rounded-b-2xl sm:text-3xl "
            >
              Yeah, i want to !
            </button>
            <span className="ss"></span>
          </div>
        </div>
        <div className="Necessiteux relative flex flex-col justify-end items-center bg-[#1A1A1A] h-[386px]  xl:max-w-[587px] px-4  ">
          <div className={styles.BoxDivSmall}>
            <span className={styles.BoxSmall}></span>
          </div>
          <h2 className=" text-white text-center text-3xl font-bold leading-10 mb-3 sm:text-4xl">
            Necessiteux
          </h2>
          <p className="text-white text-center font-normal text-2xl leading-9 max-w-[353px] mb-10 s:text-3xl">
            For the people in need of furnitures, help and charity
          </p>
          <div className="button self-stretch">
            <button
              onClick={() => setClicked(!clicked)}
              className="bg-[#B6FFCE] text-[#476072] font-bold text-2xl leading-9 text-center  w-full h-[80px] rounded-b-2xl sm:text-3xl "
            >
              Enroll in the process !
            </button>
            <span className="ss"></span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 md:gap-5 pb-12 px-4:">
        <div>
          <h2 className="text-3xl font-bold leading-9 text-center text-[#C2E1FF] mb-4 sm:text-4xl">
            Who are eligible for the process
          </h2>
          <p className="text-xl font-normal leading-7 text-white text-center sm:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam sit
            convallis tincidunt sociis. Tristique facilisi purus sed a tellus.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold leading-9 text-center text-[#b6ffce] mb-4 sm:text-4xl">
            Who are eligible for the process
          </h2>
          <p className="text-xl font-normal leading-7 text-white text-center sm:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam sit
            convallis tincidunt sociis. Tristique facilisi purus sed a tellus.
          </p>
        </div>
      </div>
    </>
  );
}
