import React, { useContext } from 'react';
import ContactsContext from '../context/ContactsContext';
import ButtonLogin from './ButtonLogin';

function FormLogin() {
  const {
    email, password, setEmail, setPassword,
  } = useContext(ContactsContext);

  return (
    <form className="form-login">
      <div>
        <h1 className="title-form-login">Bem-vindo!</h1>
        <p className="subtitle-form-login">Faça login para acessar nossa plataforma</p>
      </div>
      <div className="input-group">
        <label htmlFor="email-input" className="label-simple">
          Email
          <input
            type="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            className="input-medium"
            placeholder="Digite seu email"
          />
        </label>

        <label htmlFor="password-input" className="label-simple">
          Senha
          <input
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            className="input-medium"
            placeholder="Digite sua senha"
          />
        </label>
      </div>
      <ButtonLogin />
    </form>
  );
}

export default FormLogin;
