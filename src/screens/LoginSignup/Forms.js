import React, { useState } from 'react'
import styles from './Forms.module.css'
import LoginSignup from '../../components/LoginSignup'
import { Checkbox } from 'antd'
import Google from '../../assests/google.png';
import Apple from '../../assests/apple.png';


export default function LoginsignUp() {

    const [Status, setStatus] = useState(true);

    const Login = () => (
        <div className={styles.LoginForm}  >
            <h3 >Welcome back!</h3>
            <h6>Enter your Credentials to access your account</h6>

            <form className={`d-flex flex-column justify-content-center align-items-center ${styles.LoginFormform}`}>
                <div className='col-12'>
                    <label className={styles.LoginLabels}>Email address</label><br />
                    <input type='text' className={styles.Logininput} />
                </div>
                <div className='col-12'>
                    <div className={styles.passwordcontainer}>
                        <label className={styles.LoginLabels}>Password</label><br />
                        <a>forgot password!</a>
                    </div>
                    <input type='password' className={styles.Logininput} />
                </div>
                <div className='col-12'>
                    <Checkbox className={styles.Checkbox}><small>Remember for 30 days</small></Checkbox>
                    <br />
                </div>
                <div className='col-12'>
                    <button type='submit' className={styles.button}>Login</button>
                </div>
                <div className={`col-12 ${styles.divhrline}`}>
                    <small className={styles.hrlinetext} >Or</small>
                    <hr />
                </div>
                <div className='col-12 d-flex justify-content-around align-items-center'>
                    <button type='button' className={styles.buttonauth}>
                        <img src={Google} height={24} width={24} alt='google' />
                        <small className={styles.buttonauthsmall}>Sign in with Google</small>
                    </button>
                    <button type='button' className={styles.buttonauth}>
                        <img src={Apple} height={24} width={24} alt='apple' />
                        <small className={styles.buttonauthsmall}>Sign in with Apple</small>
                    </button>
                </div>
                <div className={`col-12 d-flex justify-content-center align-items-center ${styles.lastchild}`}>
                    <small>Don’t have an account? <a onClick={() => setStatus(true)}>Sign Up</a></small>
                </div>
            </form>
        </div>
    );

    const SignUp = () => (
        <div className={styles.LoginForm}  >
            <h3 >Get Started Now</h3>

            <form className={`d-flex flex-column justify-content-center align-items-center ${styles.LoginFormform}`}>
                <div className='col-12'>
                    <label className={styles.LoginLabels}>Name</label><br />
                    <input type='text' className={styles.Logininput} />
                </div>
                <div className='col-12'>
                    <label className={styles.LoginLabels}>Email address</label><br />
                    <input type='text' className={styles.Logininput} />
                </div>
                <div className='col-12'>
                    <label className={styles.LoginLabels}>Password</label><br />
                    <input type='password' className={styles.Logininput} />
                </div>
                <div className='col-12'>
                    <Checkbox className={styles.Checkbox}><small>I agree to the terms & policy</small></Checkbox>
                    <br />
                </div>
                <div className='col-12'>
                    <button type='submit' className={styles.button}>Signup</button>
                </div>
                <div className={`col-12 ${styles.divhrline}`}>
                    <small className={styles.hrlinetext} >Or</small>
                    <hr />
                </div>
                <div className='col-12 d-flex justify-content-around align-items-center'>
                    <button type='button' className={styles.buttonauth}>
                        <img src={Google} height={24} width={24} alt='google' />
                        <small className={styles.buttonauthsmall}>Sign in with Google</small>
                    </button>
                    <button type='button' className={styles.buttonauth}>
                        <img src={Apple} height={24} width={24} alt='apple' />
                        <small className={styles.buttonauthsmall}>Sign in with Apple</small>
                    </button>
                </div>
                <div className={`col-12 d-flex justify-content-center align-items-center ${styles.lastchild}`}>
                    <small>Have an account? <a onClick={() => setStatus(false)}>Sign In</a></small>
                </div>
            </form>
        </div>
    )
    return (
        <>
            <LoginSignup
                childers={Status ? <SignUp /> : <Login />} />
        </>
    )
}
