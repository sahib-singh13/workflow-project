import React from 'react';

const StatusBadge = ({ status }) => {
  const baseClasses = "px-3 py-1 text-xs font-bold rounded-full inline-block";
  
  const statusClasses = {
    Active: "bg-green-100 text-green-800",
    Inactive: "bg-red-100 text-red-800",
  };

  return (
    <span className={`${baseClasses} ${statusClasses[status] || 'bg-gray-100 text-gray-800'}`}>
      {status}
    </span>
  );
};

export default StatusBadge;