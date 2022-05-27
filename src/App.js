import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ContactList from './pages/ContactList';
import Login from './pages/Login';
import NewContactRegistration from './pages/NewContactRegistration';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/contacts" element={<ContactList />} />
      <Route path="/contacts/register" element={<NewContactRegistration />} />
    </Routes>
  );
}

export default App;
