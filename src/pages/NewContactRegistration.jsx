import React from 'react';
import FormRegisterContact from '../components/FormRegisterContact';
import NavBarBack from '../components/NavBarBack';
import '../styles/NewContactRegistration.css';

function NewContactRegistration() {
  return (
    <body>
      <NavBarBack />
      <FormRegisterContact />
    </body>
  );
}

export default NewContactRegistration;
