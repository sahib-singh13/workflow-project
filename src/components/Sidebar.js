import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Users, Calendar, ListChecks, Settings, Search, ChevronDown } from 'lucide-react';
import userAvatar from '../assets/user-avatar.png'; // Make sure you have a user avatar image in your assets

// A dedicated logo component for reusability
const WorkflowLogo = () => (
    <div className="flex items-center space-x-2">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
        <span className="text-2xl font-bold text-white">workflow</span>
    </div>
);

const Sidebar = ({ onLogout }) => {
  const navLinks = [
    { to: "/", icon: <Home size={20} />, text: "Dashboard" },
    { to: "/employees", icon: <Users size={20} />, text: "Employees" },
    { to: "/attendance", icon: <Calendar size={20} />, text: "Attendance" },
    { to: "/tasks", icon: <ListChecks size={20} />, text: "Tasks" },
    { to: "/settings", icon: <Settings size={20} />, text: "Settings" },
  ];

  // Classes for NavLink to handle active state
  const getLinkClasses = ({ isActive }) =>
    `flex items-center p-3 rounded-lg transition-colors duration-200 ${
      isActive
        ? 'bg-white text-primary' // Active link style from the design
        : 'text-indigo-100 hover:bg-white/10'
    }`;

  return (
    <aside className="bg-primary w-64 h-screen fixed left-0 top-0 flex flex-col z-40">
      {/* Logo */}
      <div className="flex items-center justify-start h-20 px-6 border-b border-white/10">
        <WorkflowLogo />
      </div>

      {/* Search Bar */}
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-200" size={20} />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-white/10 text-white placeholder-indigo-200 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
        </div>
      </div>

      {/* Nav Links */}
      <nav className="flex-grow px-4 space-y-2">
        {navLinks.map((link) => (
          <NavLink key={link.to} to={link.to} end={link.to === "/"} className={getLinkClasses}>
            {link.icon}
            <span className="ml-4 font-semibold">{link.text}</span>
          </NavLink>
        ))}
      </nav>

      {/* User Profile & Logout */}
      <div className="p-4 border-t border-white/10">
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <img src={userAvatar} alt="User Avatar" className="w-10 h-10 rounded-full" />
                <div className="ml-3">
                    <p className="font-semibold text-sm text-white">Tom H.</p>
                    <p className="text-xs text-indigo-200">Project Manager</p>
                </div>
            </div>
          <ChevronDown size={20} className="text-indigo-200 cursor-pointer" />
        </div>
        <button
            onClick={onLogout}
            className="w-full mt-4 bg-white/10 text-indigo-100 font-bold py-2 px-4 rounded-lg hover:bg-white/20 transition"
        >
            Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;