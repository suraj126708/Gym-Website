import "./App.css";
import ContactUs from "./Pages/ContactUs";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Trainers from "./Pages/Trainers";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegisterPage";
import About from "./Pages/About";
import ProfilePage from "./Pages/Profile";
import WorkoutForm from "./Pages/AddWorkOut";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Register" element={<RegistrationPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/AddWorkOut" element={<WorkoutForm />} />
      </Routes>
    </div>
  );
}

export default App;
