import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContactsContext from './ContactsContext';

export default function ContactsProvider({ children }) {
  const [contacts, setContacts] = useState([]);
  const [errorName, setErrorName] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorMobile, setErrorMobile] = useState(null);
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const contextValue = {
    contacts,
    setContacts,
    errorName,
    setErrorName,
    errorEmail,
    setErrorEmail,
    errorMobile,
    setErrorMobile,
  };

  return (
    <ContactsContext.Provider value={contextValue}>
      { children }
    </ContactsContext.Provider>
  );
}

ContactsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
