import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../../actions/auth';
import { Redirect } from 'react-router-dom';

const ForgotPassword = ({ history }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { isAuthenticated } = auth;
  const [formData, setFormData] = useState({ email: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(forgotPassword(formData, history));
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  return (
    <Fragment>
      <div className='auth background'>
        <div className='content'>
          <div className='overlay'>
            <div className='auth-container'>
              <h1 className='large'>Forgot Password</h1>
              <p className='medium'>
                Enter your email address and we'll send you a link to reset your
                password
              </p>
              <form className='form' onSubmit={(e) => handleSubmit(e)}>
                <div className='form-group'>
                  <input
                    type='email'
                    placeholder='Email Address'
                    name='email'
                    value={formData.email}
                    onChange={(e) => setFormData({ email: e.target.value })}
                  />
                </div>
                <input
                  type='submit'
                  className='btn btn-secondary'
                  value='Send email'
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ForgotPassword;
