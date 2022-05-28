import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonAddNewContact from '../components/ButtonAddNewContact';
import NavBarBack from '../components/NavBarBack';
import TableContactList from '../components/TableContactList';
import ContactsContext from '../context/contacts/ContactsContext';
import UserContext from '../context/user/UserContext';
import { requestData, setToken } from '../services/requests';
import '../styles/ContactList.css';

function ContactList() {
  const { setIsAuthenticated } = useContext(UserContext);
  const { setContacts } = useContext(ContactsContext);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const endpoint = '/contacts';

      const { data } = await requestData(endpoint);
      setContacts(data);
    })();
  }, []);

  useEffect(() => {
    (() => {
      const user = JSON.parse(localStorage.getItem('token'));

      if (!user) return navigate('/');

      const { token } = user;

      setToken(token);
      setIsAuthenticated(true);
      return true;
    })();
  }, [navigate]);

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
