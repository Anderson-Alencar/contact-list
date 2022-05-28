import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UserContext from './UserContext';

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
    <UserContext.Provider value={contextValue}>
      { children }
    </UserContext.Provider>
  );
}

ContactsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
