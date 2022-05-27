import React from 'react';
import ButtonAddNewContact from '../components/ButtonAddNewContact';
import NavBarBack from '../components/NavBarBack';
import TableContactList from '../components/TableContactList';
import '../styles/ContactList.css';

function ContactList() {
  return (
    <body>
      <NavBarBack />
      <main>
        <div className="top-contact-list">
          <h1 className="title-list">Listagem de contatos</h1>
          <ButtonAddNewContact />
        </div>
        <TableContactList />
      </main>
    </body>
  );
}

export default ContactList;
