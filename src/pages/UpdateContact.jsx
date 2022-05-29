import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBarBack from '../components/NavBarBack';
import '../styles/InsertContact.css';
import { setToken } from '../services/requests';
import UserContext from '../context/user/UserContext';
import FormUpdateContact from '../components/FormUpdateContact';

function UpdateContact() {
  const { setIsAuthenticated } = useContext(UserContext);

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
      <FormUpdateContact />
    </body>
  );
}

export default UpdateContact;
