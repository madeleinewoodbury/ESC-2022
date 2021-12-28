import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAlert } from '../../actions/alert'
import { register } from '../../actions/auth'
import { Link, Redirect } from 'react-router-dom'

const Register = () => {
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth)
  const { isAuthenticated } = auth
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== password2) {
      dispatch(setAlert('Passwords do not match', 'danger', 3000))
    } else {
      dispatch(register(formData))
    }
  }

  const { name, email, password, password2 } = formData

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />
  }

  return (
    <Fragment>
      <div className='auth background'>
        <div className='banner'></div>
        <div className='content content-bg'>
          <div className='overlay'>
            <div className='auth-container'>
              <h1 className='large'>Sign Up</h1>
              <p className='lead'>
                <i className='fas fa-user'></i> Create Your Account
              </p>
              <form className='form' onSubmit={(e) => handleSubmit(e)}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Name'
                    name='name'
                    value={name}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='email'
                    placeholder='Email Address'
                    name='email'
                    value={email}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
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
                  value='Register'
                />
              </form>
              <p className='my-1'>
                Already have an account?{' '}
                <Link className='text-primary' to='/login'>
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Register
