import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../layout/Spinner';

const EmailSent = () => {
  const auth = useSelector((state) => state.auth);
  const { loading, message } = auth;

  return loading ? (
    <Spinner />
  ) : (
    <div className='auth background'>
      <div className='content'>
        <div className='overlay'>
          <div className='auth-container'>
            <h1 className='large'>Check your inbox</h1>
            <p className='lead'>{message && message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSent;
