import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FormRegisterContact from '../components/FormRegisterContact';
import NavBarBack from '../components/NavBarBack';
import '../styles/NewContactRegistration.css';
import { setToken } from '../services/requests';
import ContactsContext from '../context/ContactsContext';

function NewContactRegistration() {
  const { setIsAuthenticated } = useContext(ContactsContext);

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
  }, [navigate]);

  return (
    <body>
      <NavBarBack />
      <FormRegisterContact />
    </body>
  );
}

export default NewContactRegistration;
