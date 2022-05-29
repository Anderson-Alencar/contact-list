import React from 'react';
import { useNavigate } from 'react-router-dom';

function ButtonAddNewContact() {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="btn-new-contact"
      onClick={() => navigate('/contacts/register')}
    >
      Adicionar novo contato
    </button>
  );
}

export default ButtonAddNewContact;
