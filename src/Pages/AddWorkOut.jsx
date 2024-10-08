import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/Navbar";

const WorkoutForm = () => {
  const [exercise, setExercise] = useState("");
  const [duration, setDuration] = useState("");
  const [burntCalories, setBurntCalories] = useState("");
  const [description, setDescription] = useState("");
  const [successPopup, setSuccessPopup] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (exercise && duration && burntCalories) {
      setExercise("");
      setDuration("");
      setBurntCalories("");
      setDescription("");
      setSuccessPopup(true);
    }
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen  mt-20 text-white flex flex-col">
      <NavBar />
      <div className="flex-grow p-6 flex flex-col items-center">
        <h1 className="text-3xl font-sans font-semibold mb-8">
          Log Today's Workout
        </h1>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Exercise Name
            </label>
            <input
              type="text"
              value={exercise}
              onChange={(e) => setExercise(e.target.value)}
              className="w-full p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="e.g. Push-ups"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Duration (in minutes)
            </label>
            <input
              type="number"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="e.g. 30"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Burnt Calories
            </label>
            <input
              type="number"
              value={burntCalories}
              onChange={(e) => setBurntCalories(e.target.value)}
              className="w-full p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="e.g. 250"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Description (Optional)
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="e.g. Completed 3 sets of push-ups"
              rows="3"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Add Workout
          </button>
        </form>

        {/* Success Popup */}
        {successPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-xl font-bold mb-4">
                Workout Added Successfully!
              </h2>
              <button
                onClick={handleGoHome}
                className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg"
              >
                Go to Home Page
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkoutForm;
