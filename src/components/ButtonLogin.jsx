import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { requestLogin } from '../services/requests';

function ButtonLogin() {
  const { email, password, setIsAuthenticated } = useContext(UserContext);
  const navigate = useNavigate();

  const login = async () => {
    try {
      const endpoint = '/auth/login';
      const { token } = await requestLogin(endpoint, { email, password });

      localStorage.setItem('token', JSON.stringify({ token }));
      setIsAuthenticated(true);
      navigate('/contacts');
    } catch (error) {
      setIsAuthenticated(false);
    }
  };

  return (
    <button
      type="button"
      onClick={login}
      className="btn-login"
    >
      Fazer login
    </button>
  );
}

export default ButtonLogin;