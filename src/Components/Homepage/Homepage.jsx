import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import { useHistory } from 'react-router-dom';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

export const Homepage = ({ setUser }) => {
  const history = useHistory();
  const [username, setUsername] = useState('');

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`http://localhost:3000/owner`, { username })
      .then((res) => {
        setUser(res.data);
        setUsername('');
      })
      .then(() => history.push('/room'));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input value={username} handleChange={handleChange} />
        <Button />
      </form>
    </div>
  );
};

Homepage.propTypes = {
  setUser: PropTypes.func,
};
