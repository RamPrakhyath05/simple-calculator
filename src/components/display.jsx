/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Display = ({ value }) => {
  return (
    <div className="bg-slate-800 text-white text-4xl px-10 py-4 mb-3 text-right rounded-3xl relative overflow-hidden min-h-20">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-50"></div>
      <div className="relative z-10 break-words text-right whitespace-normal">{value}</div>
    </div>
  );
};


export default Display;
