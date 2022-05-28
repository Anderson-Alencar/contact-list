import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContactsContext from './ContactsContext';

export default function ContactsProvider({ children }) {
  const [contacts, setContacts] = useState([]);
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const contextValue = {
    contacts,
    setContacts,
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
