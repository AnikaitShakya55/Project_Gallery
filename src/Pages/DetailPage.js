import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import myImg from '../Assests/akshxar.jpeg';



const DetailPage = () => {
  return (
    <div className=" flex-col  min-h-screen mx-40">

      <div className="text-center p-10 ">
        <h2 className="inline-block text-5xl py-5 px-9 text-white  bg-orange-500 bg-opacity-15 font-semibold">
          Anikait Shakya
        </h2>

        <h3 className=" text-2xl my-5 mx-72 py-2 px-9 text-yellow-50 bg-orange-500 bg-opacity-20  font-semibold ">
          Developer and Designer
        </h3>

        <p className="text-1xl text-white font-bold ">
          Proficient React.js engineer with expertise in HTML, CSS, JavaScript,
          and Next.js, skilled at developing responsive web designs using
          Bootstrap. Eager to contribute knowledge and experience to drive
          success in React.js development roles.
        </p>
      </div>



      <div className="text-5xl flex justify-center gap-16 py-3">
        <FaGithub  style={{ color: 'aliceblue' }} />
        <FaLinkedin/>
        <RiInstagramFill/>
      </div>

      <div className=" my-5 text-sm flex justify-center ">
        <img alt='my pic' src={myImg} className="text-center rounded-full w-70 h-80"/>

      </div>



    </div>

  );
};

export default DetailPage;
