import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { requestPost } from '../services/requests';

function ButtonRegister({ name, email, mobile }) {
  const navigate = useNavigate();

  const insertContact = async () => {
    const endpoint = '/contacts';
    await requestPost(endpoint, { name, email, mobile });
    navigate('/contacts');
  };

  return (
    <button
      type="button"
      onClick={insertContact}
      className="btn-register"
    >
      Cadastrar contato
    </button>
  );
}

ButtonRegister.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  mobile: PropTypes.string.isRequired,
};

export default ButtonRegister;
