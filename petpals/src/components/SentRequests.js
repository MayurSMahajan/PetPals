import React from "react";
import PendingRequests from "./PendingRequests";
const SentRequests = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold ml-10 mt-10">
        Your sent requests ✨
      </h1>
      <PendingRequests />
    </div>
  );
};
export default SentRequests;
