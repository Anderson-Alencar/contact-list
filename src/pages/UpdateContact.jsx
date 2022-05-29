import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NavBarBack from '../components/NavBarBack';
import '../styles/InsertContact.css';
import { requestGet, setToken } from '../services/requests';
import UserContext from '../context/user/UserContext';
import FormUpdateContact from '../components/FormUpdateContact';

function UpdateContact() {
  const { setIsAuthenticated } = useContext(UserContext);
  const navigate = useNavigate();

  const { id } = useParams();

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
      const endpoint = `/contacts/${id}`;

      const { data } = await requestGet(endpoint);
      setDataContact(data);
    })();
  }, []);

  return (
    <body>
      <NavBarBack />
      <FormUpdateContact
        id={id}
        dataContact={dataContact}
      />
    </body>
  );
}

export default UpdateContact;
