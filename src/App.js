import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserProvider from './context/UserProvider';
import ContactList from './pages/ContactList';
import Login from './pages/Login';
import NewContactRegistration from './pages/NewContactRegistration';

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/contacts" element={<ContactList />} />
        <Route path="/contacts/register" element={<NewContactRegistration />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
