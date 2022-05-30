import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { requestPost } from '../services/requests';
import ContactsContext from '../context/contacts/ContactsContext';

function ButtonRegister({ name, email, mobile }) {
  const { setErrorName, setErrorEmail, setErrorMobile } = useContext(ContactsContext);
  const navigate = useNavigate();

  const validateFields = () => {
    if (!name || name === '') {
      setErrorName(true);
      return false;
    }

    if (!email || email === '') {
      setErrorEmail(true);
      return false;
    }

    if (!mobile || mobile === '') {
      setErrorMobile(true);
      return false;
    }

    return true;
  };

  const clearErrors = () => {
    setErrorName(false);
    setErrorEmail(false);
    setErrorMobile(false);
  };

  const insertContact = async () => {
    clearErrors();
    const isValidFields = validateFields();
    if (isValidFields) {
      const endpoint = '/contacts';
      await requestPost(endpoint, { name, email, mobile });
      navigate('/contacts');
    }
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
