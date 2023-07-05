import React from 'react';
import Login from './Login';
import User from './User';

export const AppContext = React.createContext(null);

const UseContext = () => {
  const [username, setUsername] = React.useState('');

  return (
    <React.Fragment>
      <AppContext.Provider value={{ username, setUsername }}>
        <Login />
        <User />
      </AppContext.Provider>
    </React.Fragment>
  );
};

export default UseContext;
