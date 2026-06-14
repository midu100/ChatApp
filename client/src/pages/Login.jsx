import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { MessageSquare, Mail, Lock, ArrowRight } from "lucide-react";
import InputField from "../components/common/InputField";
import { useLoginMutation } from "../lib/api";
import { toast } from "react-toastify";
import {
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import loginPic from "../assets/img/login.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [login, { data, isLoading, error }] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) return toast.error("Email is required");
    if (!password) return toast.error("Password is required");

    try {
      const res = await login({ email, password }).unwrap();
      
      toast.success(res?.message || "Login Successfully");
      navigate("/");
    } catch (err) {
      console.error(err);
      toast.error(err?.data?.message || err?.message || "Login Failed");
    }
  };

  return (
    <div className="min-h-screen flex bg-[#f5f5f5]">
      {/* Left Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#F7F1DE] px-6">
        <div className="w-full max-w-md">
          {/* Heading */}
          <h1 className="text-5xl font-bold text-center mb-10 text-gray-900">
            Sign In
          </h1>

          {/* Social Icons */}
          <div className="flex justify-center gap-5 mb-6">
            <div className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-gray-100 cursor-pointer">
              <FaFacebookF className="text-blue-600" />
            </div>

            <div className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-gray-100 cursor-pointer">
              <FaGoogle className="text-red-500" />
            </div>

            <div className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-gray-100 cursor-pointer">
              <FaInstagram className="text-pink-500" />
            </div>

            <div className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-gray-100 cursor-pointer">
              <FaLinkedinIn className="text-blue-700" />
            </div>
          </div>

          <p className="text-center text-gray-500 mb-8">Or use your account</p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-4 rounded-full border border-gray-300 bg-white text-gray-700 placeholder:text-gray-400 outline-none focus:border-teal-700 transition"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-6 py-4 rounded-full border border-gray-300 bg-white text-gray-700 placeholder:text-gray-400 outline-none focus:border-teal-700 transition"
            />

            <div className="text-center text-gray-500 text-sm">
              Forgot your password?
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 rounded-full bg-teal-700 hover:bg-teal-800 text-white font-medium transition"
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </button>

            <p className="text-center text-gray-500 mt-6">
              Don't have an account?{" "}
              <Link to="/signup" className="font-semibold text-teal-700">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        {/* Background Image */}
        <img
          src={loginPic}
          alt=""
          className="absolute inset-0 w-full h-full object-cover blur-s scale-110"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-10">
          <h1 className="text-6xl font-bold mb-5">Hey There!</h1>

          <p className="text-lg text-center max-w-md mb-10">
            Create your account now and step into an amazing new journey.
          </p>

          <Link
            to="/signup"
            className="px-14 py-4 border-2 border-white rounded-full hover:bg-white hover:text-black transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
