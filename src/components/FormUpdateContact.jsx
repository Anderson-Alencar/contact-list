import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ButtonUpdate from './ButtonUpdate';

function FormUpdateContact({ id, dataContact }) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();

  useEffect(() => {
    if (dataContact) {
      setName(dataContact.name);
      setEmail(dataContact.email);
      setMobile(dataContact.mobile);
    }
  }, [dataContact]);

  return (
    <form className="contact-form">
      <div>
        <h1 className="title-form">Atualizar contato</h1>
        <p className="desc-form">Faça as alterações necessárias e ao terminar salve seu contato</p>
      </div>
      <div className="group-input">
        <label htmlFor="name-input" className="label-large">
          Nome completo
          <input
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
            className="input-large"
            placeholder="Digite o nome do contato"
          />
        </label>
        <div className="two-inputs">
          <label htmlFor="name-input" className="label-simple">
            Email
            <input
              type="email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              className="input-small"
              placeholder="Digite o email"
            />
          </label>
          <label htmlFor="name-input" className="label-simple">
            Celular
            <input
              type="text"
              value={mobile}
              onChange={({ target }) => setMobile(target.value)}
              className="input-small"
              placeholder="Digite o celular"
            />
          </label>
        </div>
      </div>
      <ButtonUpdate
        name={name}
        email={email}
        mobile={mobile}
        id={id}
      />
    </form>
  );
}

FormUpdateContact.propTypes = {
  id: PropTypes.string.isRequired,
  dataContact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    mobile: PropTypes.string.isRequired,
  }).isRequired,
};

export default FormUpdateContact;
