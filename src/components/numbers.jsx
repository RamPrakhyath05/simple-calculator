/* eslint-disable react/prop-types */
const Numbers = ({ number , onClick }) => {
  return (
    <button className="w-16 h-16 bg-orange-600 hover:bg-orange-900 text-white font-bold text-2xl rounded-lg mx-2 transition-colors duration-300" onClick={()=>{onClick(number)}}>
      {number}
    </button>
  );
};

export default Numbers;
