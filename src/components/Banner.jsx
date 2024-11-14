import React from "react";

import IconRating from "../assets/rating.png";
import IconRatingHalf from "../assets/rating-half.png";
import ImgTrailer from "../assets/temp-1.jpeg";
import IconPlay from "../assets/play-button.png";

const Banner = () => {
  return (
    <div className="w-full h-[600px] bg-banner bg-center bg-no-repeat bg-cover relative">
      <div className="w-full h-full absolute top-0 left-0 bg-black opacity-40" />
      <div className="p-4 w-full h-full flex items-center justify-center space-x-[50px] relative z-10">
        <div className="flex flex-col space-y-5 items-baseline w-[50%]" >
          <p className="text-white text-xl py-2 px-3 bg-gradient-to-r from-red-600 to-red-300 ">
            TV Show
          </p>

          <div className="flex flex-col space-y-5">
            <h1 className="text-white text-[40px] font-bold">Nghe nói vợ thích anh</h1>
            <div className="flex items-center space-x-3">
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRatingHalf} alt="rating" className="w-8 h-8" />
            </div>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              ratione animi necessitatibus magnam eligendi, repellendus in earum
              voluptates laboriosam sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              ratione animi necessitatibus magnam eligendi, repellendus in earum
              voluptates laboriosam sint.
            </p>
            <div className="flex items-center space-x-5">
              <button className="px-5 py-3 text-white rounded-sm bg-black font-bold text-sm" >Chi tiết</button>
              <button className="px-5 py-3 text-white rounded-sm bg-red-600 font-bold text-sm">Xem phim</button>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex items-center justify-center">
          <div className="w-[300px] h-[400px] relative group">
            <img src={ImgTrailer} alt="temp" className="w-full h-full object-cover"/>
            <button
             className="w-full h-full 
             absolute top-0 left-0 flex items-center justify-center
             backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <img src={IconPlay} alt="play" className="w-16 h-16"/>
          </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
