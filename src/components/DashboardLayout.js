import React from 'react';
import Sidebar from './Sidebar';

const DashboardLayout = ({ children, onLogout }) => {
  return (
    // Use the custom light background color
    <div className="bg-light-bg min-h-screen">
      <Sidebar onLogout={onLogout} />
      {/* Adjust margin-left to match sidebar width */}
      <main className="ml-64 p-8">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;