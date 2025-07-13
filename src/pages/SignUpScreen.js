// src/pages/SignUpScreen.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
// import plantLeft from '../assets/plant-left.svg'; // Removed this import
import plantRight from '../assets/plant-right.svg'; // Kept this import

const WorkflowLogo = () => (
  <div className="flex items-center space-x-2">
    <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
    <span className="text-2xl font-bold text-gray-800">workflow</span>
  </div>
);

const SignUpScreen = () => {
  const navigate = useNavigate();

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    console.log("Signing up...");
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4 font-sans">
      <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2">

        {/* --- LEFT COLUMN: FORM --- */}
        <div className="p-8 md:p-12 bg-gradient-to-br from-white to-purple-50/50">
          <WorkflowLogo />
          <form className="mt-8 space-y-4" onSubmit={handleSignUpSubmit}>
            <div>
              <label className="text-sm font-semibold text-gray-700" htmlFor="email">Email</label>
              <input className="w-full mt-1 p-3 border border-gray-300 rounded-lg bg-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500" id="email" type="email" placeholder="Email"/>
              <p className="text-xs text-gray-500 mt-1">Enter your email address</p>
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700" htmlFor="password">Password</label>
              <input className="w-full mt-1 p-3 border border-gray-300 rounded-lg bg-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500" id="password" type="password" placeholder="Password"/>
            </div>
             <div>
              <label className="text-sm font-semibold text-gray-700" htmlFor="confirm-password">Confirm password</label>
              <input className="w-full mt-1 p-3 border border-gray-300 rounded-lg bg-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500" id="confirm-password" type="password" placeholder="Repeat your password"/>
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700">Role</label>
              <div className="flex items-center space-x-6 mt-2 text-gray-600 text-sm">
                <label className="flex items-center cursor-pointer"><input type="radio" name="role" className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" /><span className="ml-2">Admin</span></label>
                <label className="flex items-center cursor-pointer"><input type="radio" name="role" className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" defaultChecked /><span className="ml-2">Intern</span></label>
                <label className="flex items-center cursor-pointer"><input type="radio" name="role" className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" /><span className="ml-2">User</span></label>
              </div>
            </div>
            <div className="pt-2">
               <label className="flex items-start text-sm text-gray-600 cursor-pointer">
                    <input type="checkbox" className="h-4 w-4 mt-0.5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" required/>
                    <span className="ml-2">Accept terms and condition<br/><span className="text-xs text-gray-500">You agree to our Terms of Service and Privacy Policy.</span></span>
                </label>
            </div>
            <div className="pt-2">
              <button type="submit" className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 transition">
                <FiMail />
                Signup with Email
              </button>
            </div>
          </form>
        </div>

        {/* --- VERTICAL SEPARATOR --- */}
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3/4 w-px bg-gray-200"></div>

        {/* --- RIGHT COLUMN: SOCIAL & LOGIN --- */}
        <div className="p-8 md:p-12 flex flex-col items-center justify-center text-center">
            <div className="w-full max-w-xs">
                <p className="text-gray-600 text-sm">already have an account?</p>
                <button onClick={() => navigate('/login')} className="w-full mt-2 bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 transition">
                    Login
                </button>
            </div>

            <div className="flex items-center my-8 w-full max-w-xs"><hr className="w-full border-t border-gray-300" /><span className="px-4 text-gray-500 text-sm">Or</span><hr className="w-full border-t border-gray-300" /></div>
            
            <p className="text-center text-gray-600 mb-4 text-sm">Connect with</p>
            <div className="flex justify-center space-x-4">
                <button className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 transition"><FcGoogle size={24} /></button>
                <button className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-full text-blue-600 hover:bg-gray-100 transition"><FaFacebook size={24} /></button>
            </div>

            <div className="w-full max-w-xs mt-12">
                <p className="text-gray-600 text-sm">Having any issues?</p>
                <button className="w-full mt-2 bg-gray-200 text-gray-800 font-bold py-3 px-4 rounded-lg hover:bg-gray-300 transition">
                    Contact Support
                </button>
            </div>
        </div>

        {/* --- ILLUSTRATIONS --- */}
        {/* <img src={plantLeft} alt="" className="hidden md:block absolute bottom-0 left-8 w-40 pointer-events-none" /> */}
        <img src={plantRight} alt="" className="hidden md:block absolute bottom-0 right-8 w-40 pointer-events-none" />
      </div>
    </div>
  );
};

export default SignUpScreen;