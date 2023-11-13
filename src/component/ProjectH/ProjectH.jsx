import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import { Component } from "react";
const ProjectH = () => {
  const data = [
    {
      name: `Kickstarting SoCP`,
      TimeandDate: `5:30 PM,June 17`,
      img: require("../../assets/01.jpg"),
      details: `Get Know aboutall we have in store for you!`,
    },
    {
      name: `Kickstarting Assignment`,
      TimeandDate: `7:00 PM,June 17`,
      img: require("../../assets/02.jpg"),
      details: `Find All relevant Links by clicking notes below`,
    },
    {
      name: `Binary Search, Sorting & Divide and Conquer`,
      TimeandDate: `3:30 PM,June 23`,
      img: require("../../assets/03.jpg"),
      details: `We will dicuss the concepts with focus on how to apply them in cp,followed by a mashup to help you master these concepts`,
    },
    {
      name: `Introduction to C++ STL`,
      TimeandDate: `5:30 PM,June 28`,
      img: require("../../assets/05.jpg"),
      details: `Learn Modern C++ feature useful in competitive programming`,
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // prevArrow: <PrevArrow />,
    // nextArrow: <NextArrow />,
  };
  return (
    <div className="w-3/4 m-auto">
      <p className=" flex justify-center items-center mt-4 text-2xl font-semibold">
        Upcoming Events
      </p>
      <div className="mt-20 mb-20">
        <Slider {...settings}>
          {data.map((d) => (
            <div className="bg-white h-[450px] text-black rounded-xl ">
              <div className="flex justify-center items-center">
                {d.TimeandDate}
              </div>
              <div className="rounded-xl  flex justify-center items-center bg-indigo-400 ">
                <img src={d.img} alt="" className="w-44 h-44" />
              </div>
              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p className="text-xl font-semibold">{d.name}</p>
                <p>{d.details}</p>
                <button className=" bg-indigo-500  text-lg px-6 py-1 rounded-xl">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <NavLink
        to="/event"
        className=" flex justify-center items-center mt-4 mb-4 text-xl font-semibold text-red-500"
      >
        See All Events
      </NavLink>
    </div>
  );
};

export default ProjectH;
