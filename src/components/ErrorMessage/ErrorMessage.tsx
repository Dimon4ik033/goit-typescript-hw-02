import React from 'react';
import ErrorMessageProps from './types';

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div style={{ textAlign: 'center', color: 'red', margin: '20px 0' }}>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
