import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ContactsProvider from './context/contacts/ContactsProvider';
import UserProvider from './context/user/UserProvider';
import ContactList from './pages/ContactList';
import Login from './pages/Login';
import InsertContact from './pages/InsertContact';
import UpdateContact from './pages/UpdateContact';

function App() {
  return (
    <UserProvider>
      <ContactsProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/contacts" element={<ContactList />} />
          <Route path="/contacts/register" element={<InsertContact />} />
          <Route path="/contacts/update/:id" element={<UpdateContact />} />
        </Routes>
      </ContactsProvider>
    </UserProvider>
  );
}

export default App;
