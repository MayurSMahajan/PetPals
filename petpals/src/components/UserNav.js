import React from "react";
import SearchBar from "./SearchBar";
import dogs from "../images/dogs.png";
import { useNavigate } from "react-router-dom";
const UserNav = () => {
  const navigate = useNavigate();
  const sentRequestsPage = () => {
    navigate("/sent-requests");
  };

  let username = "Mayur";

  return (
    <div className="flex justify-around items-bottom mt-10">
      <div>
        <h1 className="text-3xl font-semibold">
          Hey <strong>{username} 👋</strong>
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
