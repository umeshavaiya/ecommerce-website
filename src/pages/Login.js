import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import { googleSignInInitiate } from '../redux/action'
import './Login.css'

const Login = () => {
    const [state, setstate] = useState({
        email: '',
        password: '',
    });

    const dispatch = useDispatch();

    const { email, password } = state;
    const handleSubmit = () => { }
    const handleGoogleSignIn = () => {
        dispatch(googleSignInInitiate())
    }
    const handleChange = (e) => {
        let { name, value } = e.target;
        setstate({ ...state, [name]: value })
    }
    return (
        <div>
            <div id="logreg-forms">
                <form id='form-signin' onSubmit={handleSubmit}>
                    <h1 className='h3 mb-3 font-weight-normal' style={{ textAlign: "center" }}>
                        Sign In
                    </h1>
                    <div className="social-login">
                        <button className='btn google-btn social-btn' type='button' onClick={handleGoogleSignIn}>
                            <span>
                                <i className="fab fa-google-plus-g"></i>  Google+
                            </span>
                        </button>
                    </div>
                    <p style={{ textAlign: 'center' }}>OR</p>
                    <input
                        type="email"
                        id="inputEmail"
                        className="form-control"
                        placeholder="Email Address"
                        name="email"
                        onChange={handleChange}
                        value={email}
                        required
                    />

                    <input
                        type="password"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        value={password}
                        required
                    />
                    <button className='btn btn-secondary btn-block' type='submit'>
                        <i className="fas fa-sign-in-alt"></i> Sign In
                    </button>
                    <hr />
                    <p>Don't have Acoount</p>
                    <Link to='/register'>
                        <button className='btn btn-primary btn-block' type='button' id="btn-">
                            <i className="fas fa-user-plus"></i>  Sign up New Account
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Login