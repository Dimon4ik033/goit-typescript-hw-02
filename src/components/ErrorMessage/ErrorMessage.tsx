import React from 'react';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div style={{ textAlign: 'center', color: 'red', margin: '20px 0' }}>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
