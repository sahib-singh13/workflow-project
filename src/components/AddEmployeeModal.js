// src/components/AddEmployeeModal.js

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import illustration from '../assets/illustration-add-employee.svg';

const AddEmployeeModal = ({ onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    department: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the new employee, set status to Active, and close the modal
    onAdd({ id: Date.now(), ...formData, status: 'Active' });
    onClose(); 
  };
  
  // A consistent style for all form inputs
  const inputStyle = "mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2.5 px-3 bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent";

  // Using a portal to render the modal at the root, which is best practice.
  return ReactDOM.createPortal(
    // The semi-transparent backdrop
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={onClose}>
      
      {/* The Modal Card - using stopPropagation to prevent clicks from closing it */}
      <div 
        className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl w-full max-w-4xl p-8 flex gap-12 items-center" 
        onClick={e => e.stopPropagation()}
      >
        {/* Left Column: Illustration (hidden on small screens) */}
        <div className="hidden lg:block w-1/3">
          <img src={illustration} alt="Add New Employee" className="w-full h-auto"/>
        </div>

        {/* Right Column: Form */}
        <form onSubmit={handleSubmit} className="w-full lg:w-2/3">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center lg:text-left">Add New Employee</h2>
          
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" name="name" placeholder="Enter full name" onChange={handleChange} className={inputStyle} required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" name="email" placeholder="Enter email address" onChange={handleChange} className={inputStyle} required />
            </div>
            
            {/* Role and Department Dropdowns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700">Role</label>
                <select name="role" onChange={handleChange} className={inputStyle} required>
                  <option value="">Select role</option>
                  <option value="Developer">Developer</option>
                  <option value="Designer">Designer</option>
                  <option value="Manager">Manager</option>
                  <option value="Team Leader">Team Leader</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Department</label>
                <select name="department" onChange={handleChange} className={inputStyle} required>
                    <option value="">Select department</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Design">Design</option>
                    <option value="Human Resources">Human Resources</option>
                    <option value="IT">IT</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end gap-4">
            <button type="button" onClick={onClose} className="py-2.5 px-6 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none">
              Cancel
            </button>
            <button type="submit" className="py-2.5 px-6 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none">
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.getElementById('root')
  );
};

export default AddEmployeeModal;