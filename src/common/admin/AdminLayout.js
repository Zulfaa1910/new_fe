import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import Dashboard from './Dashboard';
import Contact from './Contact';
import UserHistory from './UserHistory';
import Login from './login'; // Assuming you have a Login component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/admin"
          element={
            <AdminLayout>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/riwayat/user" element={<UserHistory />} />
              </Routes>
            </AdminLayout>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
