import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { requestPut } from '../services/requests';

function ButtonUpdate({
  id, name, email, mobile,
}) {
  const navigate = useNavigate();

  const updateContact = async () => {
    const endpoint = `/contacts/${id}`;
    await requestPut(endpoint, {
      id, name, email, mobile,
    });
    navigate('/contacts');
  };

  return (
    <button
      type="button"
      onClick={updateContact}
      className="btn-register"
    >
      Salvar alterações
    </button>
  );
}

ButtonUpdate.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  mobile: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ButtonUpdate;
