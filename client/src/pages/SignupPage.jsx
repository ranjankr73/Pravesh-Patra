import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";

import { sendOtp } from "../services/operations/authAPI";
import { setSignupData } from "../slices/authSlice";
import { ROLE } from "../utils/constants";
import Tab from "../components/common/Tab";

const SignupPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [role, setRole] = useState(ROLE.STUDENT);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { firstName, lastName, email, password, confirmPassword } = formData;

  // Handle input change
  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    const signupData = { ...formData, role };
    dispatch(setSignupData(signupData));
    dispatch(sendOtp(formData.email, navigate));

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setRole(ROLE.STUDENT);
  };

  // Data for Tab component
  const tabData = [
    { id: 1, tabName: "Student", type: ROLE.STUDENT },
    { id: 2, tabName: "Professor", type: ROLE.PROFESSOR },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-gray-100 to-gray-300">
      <div className="w-full max-w-md space-y-6 bg-white p-8 rounded-lg shadow-xl">
        <h2 className="text-center text-3xl font-bold text-gray-800">Create an Account</h2>

        {/* Role Selection Tabs */}
        <Tab tabData={tabData} field={role} setField={setRole} />

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Fields */}
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                required
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500"
                placeholder="John"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                required
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500"
                placeholder="Doe"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              required
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500"
              placeholder="johndoe@example.com"
            />
          </div>

          {/* Password Fields */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">Create Password</label>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500"
              placeholder="********"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-4 top-10 cursor-pointer"
            >
              {showPassword ? <AiOutlineEyeInvisible fontSize={24} /> : <AiOutlineEye fontSize={24} />}
            </span>
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500"
              placeholder="********"
            />
            <span
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-4 top-10 cursor-pointer"
            >
              {showConfirmPassword ? <AiOutlineEyeInvisible fontSize={24} /> : <AiOutlineEye fontSize={24} />}
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 py-2 font-semibold text-white transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-600">
          Already have an account?{" "}
          <NavLink to="/login" className="font-semibold text-blue-500 hover:underline">
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
