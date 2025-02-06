import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link, Navigate } from "react-router-dom";
import { logoLight } from "../../assets/images";
import { toast } from "react-toastify";
import { auth,db } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      window.location.href = "/";
      toast.success("User logged in Successfully", {
        position: "top-",
      });
    } catch (error) {
      console.log(error.message);

      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };
 
   return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
        >
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Sign Up to Orebi!!
          </h3>
  
  
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
  
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
  
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </div>
  
          <p className="text-sm text-gray-600 text-center">
            Haven't registered?{" "}
            <Link  to="/signup">
            <span className="text-blue-600 hover:underline">
               SignUp
            </span>
            </Link>
            
          </p>
        </form>
      </div>
    );
};

export default SignIn;
