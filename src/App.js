import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginScreen from './pages/LoginScreen';
import SignUpScreen from './pages/SignUpScreen'; // 1. Import the SignUpScreen
import DashboardLayout from './components/DashboardLayout';
import DashboardHome from './pages/DashboardHome';
import EmployeeListPage from './pages/EmployeeListPage';

function App() {
  // This state determines if the user is logged in or not.
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // This function will be called from the Login page to "log the user in".
  const handleLogin = () => setIsAuthenticated(true);
  
  // 3. This function will be called from the Dashboard to "log the user out".
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <Router>
      <Routes>
        {/* --- Public Routes (for unauthenticated users) --- */}
        <Route
          path="/login"
          element={
            // If user is already logged in, redirect them from login page to dashboard
            !isAuthenticated ? <LoginScreen onLogin={handleLogin} /> : <Navigate to="/" />
          }
        />
        
        {/* 2. NEW: Route for the Sign-up page */}
        <Route
          path="/signup"
          element={
            // If user is already logged in, redirect them from signup page to dashboard
            !isAuthenticated ? <SignUpScreen /> : <Navigate to="/" />
          }
        />
        
        {/* --- Protected Routes (for authenticated users) --- */}
        <Route
          path="/*"
          element={
            // If user is logged in, show the dashboard.
            // Otherwise, redirect them to the login page.
            isAuthenticated ? (
              // Pass the logout handler to the dashboard layout
              <DashboardLayout onLogout={handleLogout}>
                <Routes>
                  <Route path="/" element={<DashboardHome />} />
                  <Route path="/employees" element={<EmployeeListPage />} />
                  {/* You can add more dashboard pages here */}
                </Routes>
              </DashboardLayout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;