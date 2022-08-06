import React from "react";
import { useEffect, useState } from "react";
import heroIllustration from "./heroIllustration.svg";
import UserNav from "./UserNav";
const PetOwner = () => {
  const [topSitters, setTopSitters] = useState([]);
  const [ratedSitters, setRatedSiters] = useState([]);
  const [cheapestSitters, setCheapestSitters] = useState([]);
  //use map method to dynamically generate cards
  return (
    <div className="">
      <UserNav />
      <div classname="sitter-near-you">
        <div className="flex flex-col mt-24">
          <h1 className="text-3xl font-semibold ml-10 ">
            Pet sitters near you 🐶
          </h1>
          <div className="card-container flex flex-row">
            <div
              className="card flex flex-col justify-between shadow-lg w-80 h-80 bg-red-200
                    rounded-lg ml-10 mt-8 pl-5 pb-3 "
            >
              <img className="w-72 h-44" src={heroIllustration} alt="" />
              <h3 text-lg>Name</h3>
              <h3 text-lg> City Name</h3>
              <h3 text-lg>Rating</h3>
              <div className="flex flex-row justify-between">
                <h3 text-lg>Price</h3>
                <button className="w-24 bg-apnacolor hover:bg-apnacolor text-white font-bold py-2 px-4 mr-4 mb-3 rounde border">
                  Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div classname="topRated-near-you">
        <div className="flex flex-col mt-24">
          <h1 className="text-3xl font-semibold ml-10 ">
            Top rated sitters near you 🐾
          </h1>
          <div className="card-container flex flex-row">
            <div
              className="card flex flex-col justify-between shadow-lg w-80 h-80 bg-red-200
                  rounded-lg ml-10 mt-8 pl-5 pb-3 "
            >
              <img className="w-72 h-44" src={heroIllustration} alt="" />
              <h3 text-lg>Name</h3>
              <h3 text-lg> City Name</h3>
              <h3 text-lg>Rating</h3>
              <div className="flex flex-row justify-between">
                <h3 text-lg>Price</h3>
                <button className="w-24 bg-apnacolor hover:bg-apnacolor text-white font-bold py-2 px-4 mr-4 mb-3 rounde border">
                  Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div classname="cheapestRated-near-you">
        <div className="flex flex-col mt-24">
          <h1 className="text-3xl font-semibold ml-10 ">
            Cheapest sitters near you 😻
          </h1>
          <div className="card-container flex flex-row">
            <div
              className="card flex flex-col justify-between shadow-lg w-80 h-80 bg-red-200
                  rounded-lg ml-10 mt-8 pl-5 pb-3 "
            >
              <img className="w-72 h-44" src={heroIllustration} alt="" />
              <h3 text-lg>Name</h3>
              <h3 text-lg> City Name</h3>
              <h3 text-lg>Rating</h3>
              <div className="flex flex-row justify-between">
                <h3 text-lg>Price</h3>
                <button className="w-24 bg-apnacolor hover:bg-apnacolor text-white font-bold py-2 px-4 mr-4 mb-3 rounde border">
                  Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
    </div>
  );
};

export default PetOwner;
