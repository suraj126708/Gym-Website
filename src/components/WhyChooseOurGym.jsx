import React from "react";
import Img from "../images/why.svg";

const WhyChooseOurGym = () => {
  return (
    <div className="flex justify-center items-center  w-full">
      <section className="mt-8 max-w-xl mx-auto px-2 ">
        <h2 className="text-2xl font-bold text-white sm:text-4xl">
          Why Choose Our Gym?
        </h2>
        <ul className="mt-6 space-y-4 text-2xl text-white">
          <li className="flex items-start">
            <svg
              className="flex-shrink-0 w-6 h-6 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <span className="ml-3 ">
              Access state-of-the-art equipment designed to help you reach your
              fitness goals.
            </span>
          </li>
          <li className="flex items-start">
            <svg
              className="flex-shrink-0 w-6 h-6 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <span className="ml-3">
              Join a supportive community dedicated to fitness and well-being.
            </span>
          </li>
          <li className="flex items-start">
            <svg
              className="flex-shrink-0 w-6 h-6 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <span className="ml-3">
              Participate in diverse fitness classes with{" "}
              <strong>50+ sessions each month</strong> tailored for all levels.
            </span>
          </li>
          <li className="flex items-start">
            <svg
              className="flex-shrink-0 w-6 h-6 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <span className="ml-3">
              Enjoy personalized training plans tailored to your fitness
              journey.
            </span>
          </li>
          <li className="flex items-start">
            <svg
              className="flex-shrink-0 w-6 h-6 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <span className="ml-3">
              Receive exclusive tips and updates through our{" "}
              <a className="text-green-600 hover:text-green-500" href="/blog">
                blog
              </a>{" "}
              and newsletters.
            </span>
          </li>
        </ul>
      </section>
      <img src={Img} className="h-[35rem]" alt="" />
    </div>
  );
};

export default WhyChooseOurGym;
