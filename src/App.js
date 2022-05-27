import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ContactList from './pages/ContactList';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/contacts" element={<ContactList />} />
    </Routes>
  );
}

export default App;
