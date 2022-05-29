import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonAddNewContact from '../components/ButtonAddNewContact';
import ModalRemoveContact from '../components/ModalRemoveContact';
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

  const [modalIsVisible, setModalIsVisible] = useState(false);

  const showModal = () => {
    setModalIsVisible(true);
  };

  const hiddenModal = () => {
    setModalIsVisible(false);
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
          showModal={showModal}
        />
      </main>
      {
        modalIsVisible && (
          <div className="modal">
            <ModalRemoveContact
              hiddenModal={hiddenModal}
            />
          </div>
        )
      }
    </body>
  );
}

export default ContactList;
