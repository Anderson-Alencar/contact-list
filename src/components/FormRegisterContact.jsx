import React from 'react';
import ButtonRegister from './ButtonRegister';

function FormRegisterContact() {
  return (
    <form className="contact-form">
      <div>
        <h1 className="title-form">Cadastre um novo contato</h1>
        <p className="desc-form">Preencha as informações para cadastrar um novo contato</p>
      </div>
      <div className="group-input">
        <label htmlFor="name-input" className="label-large">
          Nome completo
          <input type="text" className="input-large" placeholder="Digite o nome do contato" />
        </label>
        <div className="two-inputs">
          <label htmlFor="name-input" className="label-simple">
            Email
            <input type="text" className="input-small" placeholder="Digite o email" />
          </label>
          <label htmlFor="name-input" className="label-simple">
            Celular
            <input type="text" className="input-small" placeholder="Digite o celular" />
          </label>
        </div>
      </div>
      <ButtonRegister />
    </form>
  );
}

export default FormRegisterContact;
