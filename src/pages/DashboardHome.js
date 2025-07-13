import React from 'react';
import StatCard from '../components/StatCard';
import { Users, ListChecks, GraduationCap, ArrowUp, ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

// Data for the Employee Activity chart
const activityData = [
  { name: 'Jan', value: 240 }, { name: 'Feb', value: 139 },
  { name: 'Mar', value: 380 }, { name: 'Apr', value: 290 },
  { name: 'May', value: 480 }, { name: 'Jun', value: 380 },
  { name: 'Jul', value: 430 }, { name: 'Aug', value: 620 }, // Highlighted month
  { name: 'Sep', value: 480 }, { name: 'Oct', value: 580 },
  { name: 'Nov', value: 450 }, { name: 'Dec', value: 500 },
];

// A custom tooltip for the chart to match the design
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 text-white p-2 rounded-md shadow-lg">
        <p className="text-sm font-bold">{`+${payload[0].value / 20}%`}</p> {/* Example calculation */}
      </div>
    );
  }
  return null;
};

const DashboardHome = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
      
      {/* Stat Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          title="Total Employees"
          value="142"
          change="↑ 12% from last month"
          changeType="positive"
          icon={<Users className="text-primary" size={24} />}
        />
        <StatCard
          title="Active Tasks"
          value="87"
          change="↓ 3% from last week"
          changeType="negative"
          icon={<ListChecks className="text-primary" size={24} />}
        />
        <StatCard
          title="Interns"
          value="24"
          change="↑ 5% from last week"
          changeType="positive"
          icon={<GraduationCap className="text-primary" size={24} />}
        />
      </div>

      {/* Charts & Calendar Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* Employee Activity Chart */}
        <div className="xl:col-span-2 bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg text-gray-800">Employee Activity</h3>
                <button className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-md hover:bg-gray-200">
                    Quarterly
                </button>
            </div>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <BarChart data={activityData} margin={{ top: 20, right: 10, left: -20, bottom: 5 }}>
                <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} />
                <YAxis hide={true} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
                <Bar dataKey="value" barSize={25} radius={[10, 10, 0, 0]}>
                  {activityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.name === 'Aug' ? '#4A3AFF' : '#E5E7EB'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Attendance Overview */}
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <ChevronLeft size={20} className="cursor-pointer text-gray-500 hover:text-gray-800" />
            <h3 className="font-bold text-lg text-gray-800">June, 2025</h3>
            <ChevronRight size={20} className="cursor-pointer text-gray-500 hover:text-gray-800" />
          </div>
          <div className="grid grid-cols-7 gap-y-3 text-center text-sm">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
              <div key={day} className="font-semibold text-gray-400">{day}</div>
            ))}
            {/* Generating blank days for alignment and calendar days */}
            {Array.from({ length: 2 }).map((_, i) => <div key={`empty-${i}`}></div>)}
            {Array.from({ length: 30 }, (_, i) => i + 1).map(day => (
              <div
                key={day}
                className={`p-1.5 rounded-full cursor-pointer ${
                  day === 16 ? 'bg-primary text-white' : 'hover:bg-primary-light'
                }`}
              >
                {day}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;