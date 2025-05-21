/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const OperatorBtn = ({ operator, onClick }) => {
  return (
    <button
      className="w-16 h-16 bg-blue-500 hover:bg-blue-700 text-white font-bold text-2xl rounded-lg mx-2 transition-colors duration-200"
      onClick={onClick}
    >
      {operator}
    </button>
  );
};

export default OperatorBtn;
