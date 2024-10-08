import React, { useState } from "react";
import NavBar from "../components/Navbar";
import InputField from "../components/InputField";
import axios from "axios";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    contactNumber: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    profilePic: null,
    address: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.dob) newErrors.dob = "Date of Birth is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.contactNumber)
      newErrors.contactNumber = "Contact Number is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Please confirm your password";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!formData.terms) newErrors.terms = "You must agree to the terms";
    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Reset errors if validation passed
    setErrors({});

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });

      const response = await axios.post(
        "http://localhost:5000/auth/register",
        formDataToSend,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error.response?.data || error.message);
    }
  };

  return (
    <>
      <NavBar />
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto mt-32 mb-4 p-8 bg-gray-100 shadow-md rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Gym Registration
        </h2>

        {/* Full Name */}
        <InputField
          label="Full Name"
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          error={errors.fullName}
        />

        {/* Date of Birth */}
        <InputField
          label="Date of Birth"
          type="date"
          id="dob"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          error={errors.dob}
        />

        {/* Gender */}
        <InputField
          label="Gender"
          type="select"
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          error={errors.gender}
          options={[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
            { label: "Other", value: "other" },
          ]}
        />

        {/* Contact Number */}
        <InputField
          label="Contact Number"
          type="tel"
          id="contactNumber"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          error={errors.contactNumber}
        />

        {/* Email */}
        <InputField
          label="Email"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        {/* Username */}
        <InputField
          label="Username"
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          error={errors.username}
        />

        {/* Password */}
        <InputField
          label="Password"
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />

        {/* Confirm Password */}
        <InputField
          label="Confirm Password"
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
        />

        {/* Profile Picture */}
        <InputField
          label="Profile Picture (Optional)"
          type="file"
          id="profilePic"
          name="profilePic"
          onChange={handleChange}
          accept="image/*"
          error={errors.profilePic}
        />

        {/* Address */}
        <InputField
          label="Address"
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          error={errors.address}
        />

        {/* Terms and Conditions */}
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            className="mr-2 bg-transparent"
            checked={formData.terms}
            onChange={handleChange}
          />
          <label htmlFor="terms" className="text-sm font-medium text-gray-700">
            I agree to the terms and conditions
          </label>
          {errors.terms && (
            <p className="text-red-500 text-sm ml-2">{errors.terms}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-700 transition-colors duration-300"
        >
          Register
        </button>
      </form>
    </>
  );
};

export default RegistrationPage;
