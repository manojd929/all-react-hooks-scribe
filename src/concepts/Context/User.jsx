import React from 'react';
import { AppContext } from './UseContext';

const User = () => {
  const { username } = React.useContext(AppContext);
  return <div>Username: {username}</div>;
};

export default User;
