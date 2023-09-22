import React, { useEffect, useState } from 'react'
import BgImage from '../assests/Loginimg.jpg';


export default function LoginSignup({ childers }) {

    console.log(childers)
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
                    {childers}
                </div>
                <div className='col-6' style={backgroundImageStyle}>
                </div>
            </div>
        </div>
    )
}
