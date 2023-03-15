import React from "react";

const Card = ({ name, img }) => {
  return (
    <div className="bg-gray-600 flex-grow rounded-lg overflow-hidden p-2">
      <div className="flex mx-auto justify-center items-center bg-white lg:w-[150px] lg:h-[150px] w-[130px] h-[130px] rounded-[50%] overflow-hidden">
        <img src={img} alt="" className="mt-1 w-[95px]" />
      </div>
      <h1 className="text-xl md:text-2xl text-center mt-2 text-green-100">
        {name}
      </h1>
    </div>
  );
};

export default Card;
