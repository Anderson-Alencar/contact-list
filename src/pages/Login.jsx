import React from 'react';
import imagemain from '../assets/image-login.png';
import FormLogin from '../components/FormLogin';
import '../styles/Login.css';

function Login() {
  return (
    <main className="login-screen">
      <img src={imagemain} alt="imagem principal" className="image-login" />
      <FormLogin />
    </main>
  );
}

export default Login;
