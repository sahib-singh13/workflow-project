// src/pages/EmployeeListPage.js

import React, { useState } from 'react';
import { Plus, Search } from 'lucide-react';
import AddEmployeeModal from '../components/AddEmployeeModal';

// A simple badge component for status
const StatusBadge = ({ status }) => {
  const statusClasses = status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  return <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusClasses}`}>{status}</span>;
};


const EmployeeListPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Developer', department: 'Engineering', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Designer', department: 'Design', status: 'Active' },
    { id: 3, name: 'Michael Johnson', email: 'michael.j@example.com', role: 'Manager', department: 'Human Resources', status: 'Inactive' },
  ]);

  const handleAddEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
    // The modal closes itself, but you could also explicitly close it here
    // setIsModalOpen(false); 
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Employees</h1>

      {/* Header with Search and Add Button */}
      <div className="flex justify-between items-center">
        <div className="relative w-full max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search employees..."
            className="w-full bg-white rounded-lg py-2 pl-10 pr-4 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors"
        >
          <Plus size={20} />
          Add an employee
        </button>
      </div>

      {/* Employee Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="bg-gray-50 text-xs text-gray-700 uppercase">
            <tr>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">Email</th>
              <th scope="col" className="px-6 py-3">Role</th>
              <th scope="col" className="px-6 py-3">Department</th>
              <th scope="col" className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id} className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{employee.name}</td>
                <td className="px-6 py-4">{employee.email}</td>
                <td className="px-6 py-4">{employee.role}</td>
                <td className="px-6 py-4">{employee.department}</td>
                <td className="px-6 py-4"><StatusBadge status={employee.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* The Modal - it will only appear when isModalOpen is true */}
      {isModalOpen && (
        <AddEmployeeModal 
          onClose={() => setIsModalOpen(false)}
          onAdd={handleAddEmployee}
        />
      )}
    </div>
  );
};

export default EmployeeListPage;