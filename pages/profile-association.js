import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import Footer from "../components/Footer";

const ProfileAssociation = () => {
  return (
    <>
      <Header />

      {/* Background filter */}
      <div
        className="absolute bg-[#B6655F] w-full h-screen top-[-300px] left-0 z-0 "
        style={{ filter: "blur(947.567px)" }}
      ></div>
      <main className="max-w-[1200px] mx-auto mt-10 px-4 relative ">
        <Image
          src="/images/frame-profile-association.png"
          height="203"
          width="1200"
        />
        <h1 className="font-bold mt-16 mb-4 text-3xl md:text-[40px] text-white">
          Organigrame
        </h1>
        <div className="flex justify-center">
          <Image src="/images/organigrame.png" height="332" width="945" />
        </div>

        <section className="grid md:grid-cols-2 items-center gap-[55px] mt-10 text-white">
          <div>
            <h2 className="text-3xl md:text-[40px] mb-4">More About us !</h2>
            <p className="text-xl md:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              scelerisque ullamcorper egestas non maecenas. Risus malesuada
              mauris aenean id nibh mauris. Pretium egestas pellentesque risus
              augue turpis libero. Volutpat nec ac velit, quam elementum.
            </p>
          </div>
          <Image src="/images/section-frame1.svg" height="366" width="587" />
        </section>

        <section className="grid md:grid-cols-2 items-center gap-[55px] my-16 text-white">
          <Image src="/images/section-frame2.png" height="223" width="560" />
          <div>
            <h2 className="text-3xl md:text-[40px] mb-4">Latest Events !</h2>
            <p className="text-xl md:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              scelerisque ullamcorper egestas non maecenas.
            </p>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default ProfileAssociation;
