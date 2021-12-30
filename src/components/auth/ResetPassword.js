import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { resetPassword } from '../../actions/auth';
import { Redirect } from 'react-router-dom';

const ResetPassword = ({ match }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { isAuthenticated } = auth;
  const [formData, setFormData] = useState({
    password: '',
    password2: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      dispatch(setAlert('Passwords do not match', 'danger', 3000));
    } else {
      dispatch(resetPassword(formData, match.params.resettoken));
    }
  };

  const { password, password2 } = formData;

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <div className='auth background'>
        <div className='content'>
          <div className='overlay'>
            <div className='auth-container'>
              <h1 className='large'>Set your new password</h1>
              <form className='form' onSubmit={(e) => handleSubmit(e)}>
                <div className='form-group'>
                  <input
                    type='password'
                    placeholder='Password'
                    name='password'
                    value={password}
                    onChange={(e) => handleChange(e)}
                    minLength={6}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='password'
                    placeholder='Confirm Password'
                    name='password2'
                    value={password2}
                    onChange={(e) => handleChange(e)}
                    minLength={6}
                  />
                </div>
                <input
                  type='submit'
                  className='btn btn-secondary'
                  value='Save'
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ResetPassword;
