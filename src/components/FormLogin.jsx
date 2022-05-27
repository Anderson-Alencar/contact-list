import React from 'react';
import ButtonLogin from './ButtonLogin';

function FormLogin() {
  return (
    <form className="form-login">
      <div>
        <h1 className="title-form-login">Bem-vindo!</h1>
        <p className="subtitle-form-login">Faça login para acessar nossa plataforma</p>
      </div>
      <div className="input-group">
        <label htmlFor="email-input" className="label-simple">
          Email
          <input className="input-medium" placeholder="Digite seu email" />
        </label>

        <label htmlFor="password-input" className="label-simple">
          Senha
          <input className="input-medium" placeholder="Digite sua senha" />
        </label>
      </div>
      <ButtonLogin />
    </form>
  );
}

export default FormLogin;
