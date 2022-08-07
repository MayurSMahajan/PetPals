import React from "react"
import SelectPet from "./SelectPet"
import heroIllustration from "./heroIllustration.svg"

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="flex flex-row justify-around mt-20">
        <div className="hero-headline flex flex-col pl-10">
          <h1 className="text-5xl font-bold ">
            Find the best pet sitter for your furry friend!
          </h1>
          <p className="w-62 mt-4 text-lg">
            Are you looking for someone who can take good care of your pet?
            <br />
            We have you covered, search for verified Pet Sitters around your
            area now.
          </p>
          <div className="flex mt-28 ">
            <div className="flex flex-col">
              <div className="m-2 p-1">
                <a href="/pet-owner-form" className="bg-apnacolor hover:bg-apnacolor text-white font-bold m-2 p-3 rounded">
                  Find a Sitter
                </a>
                <a href="/pet-sitter-form" className="ml-3 bg-white text-gray-800 font-semibold m-2 p-3 border border-apnacolor rounded shadow">
                  Become a Sitter
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-illustration flex-2">
          <img src={heroIllustration} alt="hero" />
        </div>
      </div>
      <SelectPet />
    </div >
  );
};

export default Hero;
