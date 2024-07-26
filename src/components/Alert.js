// src/components/Alert.js
import React from 'react';

const Alert = ({ alert }) => {
  return (
    <div className={`alert alert-${alert.type}`} role="alert">
      {alert.msg}
    </div>
  );
};

export default Alert;
