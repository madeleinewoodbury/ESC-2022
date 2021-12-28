import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../actions/auth'
import { Link, Redirect } from 'react-router-dom'

const Login = () => {
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth)
  const { isAuthenticated } = auth
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(login(formData))
  }

  const { email, password } = formData

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />
  }

  return (
    <Fragment>
      <div className='auth background'>
        <div className='banner'></div>
        <div className='content'>
          <div className='overlay'>
            <div className='auth-container'>
              <h1 className='large'>Sign In</h1>
              <p className='lead'>
                <i className='fas fa-user'></i> Sign in to Your Account
              </p>
              <form className='form' onSubmit={(e) => handleSubmit(e)}>
                <div className='form-group'>
                  <input
                    type='email'
                    placeholder='Email Address'
                    name='email'
                    value={email}
                    onChange={(e) => handleChange(e)}
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
                <input
                  type='submit'
                  className='btn btn-secondary'
                  value='Login'
                />
              </form>
              <p className='my-1'>
                Don't have an account?{' '}
                <Link className='text-primary' to='/register'>
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Login
