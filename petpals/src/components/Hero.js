import React from "react";
import heroIllustration from "./heroIllustration.svg";
const Hero = () => {
  return (
    <div classname="hero-container">
      <div className="flex flex-row justify-around mt-20">
        <div className="hero-headline flex flex-col pl-10">
          <h1 className="text-5xl font-bold  ">
            Find the best pet sitter for your furry friend!
          </h1>
          <p className="w-62 mt-4 text-lg">
            Are you looking for someone who can take good care of your pet?
            <br />
            We have you covered, search for verified Pet Sitters around your
            area now.
          </p>
          <div className="flex mt-28 ">
            <button className="bg-apnacolor hover:bg-apnacolor text-white font-bold py-2 px-4  rounded">
              Find a Sitter
            </button>
            <button className="ml-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-apnacolor rounded shadow">
              Become a Sitter
            </button>
          </div>
        </div>
        <div className="hero-illustration flex-2">
          <img src={heroIllustration} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
