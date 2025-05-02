import React, { useState } from 'react';

const Password = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const toggleVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Show / Hide Password</h2>
      <input
        type={passwordVisible ? 'text' : 'password'}
        placeholder="Enter your password"
      />
      <br /><br />
      <label>
        <input type="checkbox" onChange={toggleVisibility} />
        Show Password
      </label>
    </div>
  );
};

export default Password;
