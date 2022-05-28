import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContactsContext from './ContactsContext';

export default function ContactsProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const contextValue = {
    email,
    setEmail,
    password,
    setPassword,
    isAuthenticated,
    setIsAuthenticated,
  };

  return (
    <ContactsContext.Provider value={contextValue}>
      { children }
    </ContactsContext.Provider>
  );
}

ContactsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
