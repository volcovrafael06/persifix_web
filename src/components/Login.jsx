import React, { useState } from 'react';
import { authService } from '../services/authService';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = () => {
    authService.login(username, password)
      .then(user => {
        if (user) {
          onLogin(user);
          setLoginError('');
        } else {
          setLoginError('Credenciais inválidas');
        }
      })
      .catch(error => {
        console.error("Login failed:", error);
        setLoginError('Erro ao fazer login. Tente novamente.');
      });
  };

  return (
    <div>
      <h2>Login</h2>
      {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
      <div className="form-group">
        <label>Usuário</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Usuário"
        />
      </div>
      <div className="form-group">
        <label>Senha</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
        />
      </div>
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}

export default Login;
