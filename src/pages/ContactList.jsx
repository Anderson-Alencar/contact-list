import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonAddNewContact from '../components/ButtonAddNewContact';
import ModalRemoveContact from '../components/ModalRemoveContact';
import ModalViewContact from '../components/ModalViewContact';
import NavBarBack from '../components/NavBarBack';
import TableContactList from '../components/TableContactList';
import ContactsContext from '../context/contacts/ContactsContext';
import UserContext from '../context/user/UserContext';
import { requestGet, setToken } from '../services/requests';
import '../styles/ContactList.css';

function ContactList() {
  const { setIsAuthenticated } = useContext(UserContext);
  const { setContacts } = useContext(ContactsContext);
  const navigate = useNavigate();

  const [alertRemove, setAlertRemove] = useState(false);
  const [viewContact, setViewContact] = useState(false);
  const [idContact, setIdContact] = useState();
  const [dataContact, setDataContact] = useState();

  useEffect(() => {
    (() => {
      const user = JSON.parse(localStorage.getItem('token'));

      if (!user) return navigate('/');

      const { token } = user;

      setToken(token);
      setIsAuthenticated(true);
      return true;
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const endpoint = '/contacts';

      const { data } = await requestGet(endpoint);
      setContacts(data);
    })();
  }, []);

  const showAlertRemove = (id) => {
    setAlertRemove(true);
    setIdContact(id);
  };

  const hiddenAlertRemove = () => {
    setAlertRemove(false);
  };

  const showContact = async (id) => {
    const endpoint = (`/contacts/${id}`);
    const { data } = await requestGet(endpoint);

    setDataContact(data);
    setViewContact(true);
  };

  const hiddenContact = () => {
    setViewContact(false);
  };

  return (
    <body>
      <NavBarBack />
      <main>
        <div className="top-contact-list">
          <h1 className="title-list">Listagem de contatos</h1>
          <ButtonAddNewContact />
        </div>
        <TableContactList
          showAlertRemove={showAlertRemove}
          showContact={showContact}
        />
      </main>
      {
        alertRemove && (
          <div className="modal">
            <ModalRemoveContact
              hiddenAlertRemove={hiddenAlertRemove}
              id={idContact}
            />
          </div>
        )
      }
      {
        viewContact && (
          <div className="modal">
            <ModalViewContact
              hiddenContact={hiddenContact}
              dataContact={dataContact}
            />
          </div>
        )
      }
    </body>
  );
}

export default ContactList;
