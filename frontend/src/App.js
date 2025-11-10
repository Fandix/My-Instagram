import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/LoginPage';
import './App.css';
import PageLayout from './layouts/PageLayout/PageLayout';

function App() {
  return (
    <AuthProvider>
      <Router>
        <PageLayout>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </PageLayout>
      </Router>
    </AuthProvider>
  );
}

export default App;
