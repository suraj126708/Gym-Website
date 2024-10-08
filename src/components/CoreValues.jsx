import React from "react";

const CoreValues = () => {
  return (
    <div className="flex flex-col justify-between w-full h-screen bg-neutral-900 mt-56 pl-8">
      <h3 className="mb-16 mt-8 font-bold text-white text-center text-5xl">
        Our Core Values
      </h3>
      <div className="w-full flex-grow">
        <div className="flex flex-col w-full mb-14 sm:flex-row">
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                    Commitment to Excellence
                  </h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">
                  ------------
                </p>
                <p className="mb-2 text-gray-600">
                  We are dedicated to delivering top-notch services that help
                  our members achieve their personal fitness goals.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="relative h-full ml-0 md:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                    Innovation and Growth
                  </h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">
                  ------------
                </p>
                <p className="mb-2 text-gray-600">
                  We embrace the latest advancements in fitness technology and
                  techniques to ensure our members thrive.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full mb-5 sm:flex-row">
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                    Integrity and Trust
                  </h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">
                  ------------
                </p>
                <p className="mb-2 text-gray-600">
                  We believe in fostering a transparent and trustworthy
                  environment for all our members and staff.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2">
            <div className="relative h-full ml-0 md:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
              <div className="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                    Community and Support
                  </h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">
                  ------------
                </p>
                <p className="mb-2 text-gray-600">
                  We thrive on building a strong and supportive community, where
                  every member feels welcomed and empowered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
