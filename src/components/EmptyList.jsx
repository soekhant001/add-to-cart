import React from "react";
import emptySvg from "../assets/empty.svg";

const EmptyList = () => {
  return (
    <div className="hidden last:flex flex-col items-center py-7">
      <img width={70} className="mb-5" src={emptySvg} alt="emptyImg" />
      <p className="text-sm">There is no list.</p>
    </div>
  );
};

export default EmptyList;