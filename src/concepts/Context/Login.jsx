import React from 'react';
import { AppContext } from './UseContext';

const Login = () => {
  const { setUsername } = React.useContext(AppContext);
  return (
    <div>
      <button onClick={() => setUsername('Mano')}>Login</button>
      <button onClick={() => setUsername('')}>Logout</button>
    </div>
  );
};

export default Login;
