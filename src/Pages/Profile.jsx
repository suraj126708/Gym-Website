import React from "react";
import NavBar from "../components/Navbar";

const ProfilePage = () => {
  const activities = [
    {
      title: "Cardio Workout",
      duration: "30 minutes",
      calories: 250,
    },
    {
      title: "Yoga Session",
      duration: "45 minutes",
      calories: 150,
    },
    {
      title: "Personal Training",
      duration: "1 hour",
      focus: "Strength Training",
    },
    {
      title: "Group Workout",
      duration: "1 hour",
      type: "HIIT",
    },
  ];

  return (
    <>
      <NavBar />
      <div className="min-h-screen mt-20 flex bg-transparent p-6">
        {/* Left Section */}
        <div className="w-1/4 bg-slate-300 bg-opacity-80 shadow-md rounded-lg p-4 flex flex-col items-center">
          <img
            src="https://th.bing.com/th/id/OIP.NqY3rNMnx2NXYo3KJfg43gHaHa?w=189&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover mb-4"
          />
          <h2 className="text-xl font-bold text-gray-800">John Doe</h2>
          <p className="text-gray-500">Gym Member</p>
          <div className="mt-9 text-gray-700 space-y-3">
            <p>
              <span className="font-bold">Name:</span> Suraj Gitte
            </p>
            <p>
              <span className="font-bold">Mobile No:</span> +91 9860126708
            </p>
            <p>
              <span className="font-bold">Gender:</span> Male
            </p>
            <p>
              <span className="font-bold">Membership:</span> Gold
            </p>
            <p>
              <span className="font-bold">Join Date:</span> January 12, 2023
            </p>
            <p>
              <span className="font-bold">Workout Plan:</span>
              Strength & Cardio
            </p>
            <p>
              <span className="font-bold">Trainer:</span> Jane Smith
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-3/4 ml-6">
          {/* Upper Part */}
          <div className="bg-slate-300 bg-opacity-80  shadow-md rounded-lg p-6 mb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              Profile Details
            </h2>
            <p className="text-gray-600 mt-2">Email: johndoe@example.com</p>
            <p className="text-gray-600 mt-1">Phone: (555) 123-4567</p>
          </div>

          {/* Activity List with Array Mapping */}
          <div className="shadow-md bg-slate-300 bg-opacity-80  rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Activity List
            </h3>
            <ul className="list-none space-y-4 text-gray-700">
              {activities.map((activity, index) => (
                <li
                  key={index}
                  className="bg-slate-100 p-4 rounded-md shadow-sm flex justify-between"
                >
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg text-gray-900">
                      {activity.title}
                    </h4>
                  </div>
                  <div className="flex-1 text-center">
                    <p className="text-sm text-gray-600">
                      Duration: {activity.duration}
                    </p>
                  </div>
                  <div className="flex-1 text-right">
                    {activity.calories && (
                      <p className="text-sm text-gray-600">
                        Calories Burned: {activity.calories}
                      </p>
                    )}
                    {activity.focus && (
                      <p className="text-sm text-gray-600">
                        Focus: {activity.focus}
                      </p>
                    )}
                    {activity.type && (
                      <p className="text-sm text-gray-600">
                        Type: {activity.type}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
