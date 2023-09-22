import React, { useEffect, useState } from 'react'
import { Checkbox } from 'antd'
import styles from './LoginScreens.module.css'
import BgImage from '../../assests/Loginimg.jpg';
import Google from '../../assests/google.png';
import Apple from '../../assests/apple.png';


export default function LoginScreens() {
    const [screenWidth, setScreenWidth] = useState(window.innerHeight);

    const backgroundImageStyle = {
        backgroundImage: `url(${BgImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100%', // You can adjust the height as needed
        minHeight: screenWidth,
        maxHeight: screenWidth,
        borderRadius: "45px 0px 0px 45px"
    };
    useEffect(() => {
        // Update the screenWidth state when the window is resized
        const handleResize = () => {
            setScreenWidth(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-6 d-flex justify-content-center align-items-center'>
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
                                <small>Have an account? <a>Sign In</a></small>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='col-6' style={backgroundImageStyle}>
                </div>
            </div>
        </div>
    )
}
