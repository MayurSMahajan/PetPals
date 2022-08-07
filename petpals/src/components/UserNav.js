import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import dogs from "../images/dogs.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const UserNav = () => {
  const navigate = useNavigate();
  const sentRequestsPage = () => {
    navigate("/sent-requests");
  };
  const [userName, setUserName] = useState("");
  useEffect(() => {
    axios.get("http://localhost:8000/get-owner").then((response) => {
      console.log(response)
    });
  }, []);

  

  return (
    <div className="flex justify-around items-bottom mt-10">
      <div>
        <h1 className="text-3xl font-semibold">
          Hey <strong>{userName} 👋</strong>
        </h1>
      </div>
      <div className="w-2/4">
        <SearchBar />
      </div>
      <div>
        <button
          className="bg-apnacolor hover:bg-blue-700 text-white border font-bold py-2 px-4 rounded-full"
          onClick={sentRequestsPage}
        >
          Your Requests
        </button>
      </div>
      <div>
        <img
          src={dogs}
          className="rounded-full w-12 h-12 border"
          alt="Avatar"
        />
      </div>
    </div>
  );
};

export default UserNav;
