import React from "react";
import Image1 from "../images/1.png";
import Image2 from "../images/2.png";
import Image3 from "../images/3.png";
import Image4 from "../images/4.png";

const Frame = () => {
  const image = [Image1, Image2, Image3, Image4];
  return (
    <div className="">
      <div className="grid gap-4 r w-52 h-auto bg-slate-500 justify-center justify-items-center pt-4">
        {image.map((i) => (
          <img src={i} alt={i} className="w-44 h-44 mx-5" />
        ))}
        <span className="font-Ptd font-bold text-3xl pb-4 text-slate-100">
          자람 네컷
        </span>
      </div>
    </div>
  );
};

export default Frame;
