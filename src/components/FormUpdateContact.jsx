import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ButtonUpdate from './ButtonUpdate';

function FormUpdateContact() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();

  const { id } = useParams();

  return (
    <form className="contact-form">
      <div>
        <h1 className="title-form">Atualize um contato existente</h1>
        <p className="desc-form">Preencha as informações para atualizar um contato existente</p>
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

export default FormUpdateContact;
