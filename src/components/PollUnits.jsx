import React from "react";

const PollUnits = ({ partyName, partyScore }) => {
  return (
    <div className="h-20 w-20 bg-slate-300 m-10 rounded-xl text-center content-center">
      <h1 className="font-semibold text-2xl">{partyName}</h1>
      <p className="text-xl">{partyScore}</p>
    </div>
  );
};

export default PollUnits;
