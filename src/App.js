import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ContactsProvider from './context/ContactsProvider';
import ContactList from './pages/ContactList';
import Login from './pages/Login';
import NewContactRegistration from './pages/NewContactRegistration';

function App() {
  return (
    <ContactsProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/contacts" element={<ContactList />} />
        <Route path="/contacts/register" element={<NewContactRegistration />} />
      </Routes>
    </ContactsProvider>
  );
}

export default App;
