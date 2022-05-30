import React, { useContext, useState } from 'react';
import ContactsContext from '../context/contacts/ContactsContext';
import ButtonRegister from './ButtonRegister';

function FormRegisterContact() {
  const { errorName, errorEmail, errorMobile } = useContext(ContactsContext);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();

  return (
    <form className="contact-form">
      <div>
        <h1 className="title-form">Cadastre um novo contato</h1>
        <p className="desc-form">Preencha as informações para cadastrar um novo contato</p>
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
          { errorName && <span>Nome é obrigatório</span> }
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
            { errorEmail && <span>Email é obrigatório</span> }
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
            { errorMobile && <span>Celular é obrigatório</span>}
          </label>
        </div>
      </div>
      <ButtonRegister
        name={name}
        email={email}
        mobile={mobile}
      />
    </form>
  );
}

export default FormRegisterContact;
