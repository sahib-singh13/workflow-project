import React from 'react';

const StatCard = ({ title, value, change, changeType, icon }) => {
  const isPositive = changeType === 'positive';
  const changeColor = isPositive ? 'text-green-500' : 'text-red-500';

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm flex justify-between items-start">
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-4xl font-bold text-gray-800 mt-2">{value}</p>
        <div className="flex items-center mt-2 text-xs">
          <span className={`flex items-center font-semibold ${changeColor}`}>
            {change}
          </span>
        </div>
      </div>
      <div className="bg-primary-light p-3 rounded-lg">
        {icon}
      </div>
    </div>
  );
};

export default StatCard;