import React, { useState } from 'react'
import WelcomeBack from '../../components/LoginPages/WelcomeBack/WelcomeBack'
import ForgotPassword from '../../components/LoginPages/ForgotPassword/ForgotPassword';
import "./LoginPage.scss";


const LoginPage = () => {

    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [showWelcomeBack, setShowWelcomeBack] = useState(true);


    const togglePage = (event) => {
        event.preventDefault()
        setShowForgotPassword(!showForgotPassword)
        setShowWelcomeBack(!showWelcomeBack)
    }

    return (
        <>
        {showWelcomeBack && <WelcomeBack togglePage={togglePage} />}
        {showForgotPassword && <ForgotPassword togglePage={togglePage}/>}
        </>
    )
}

export default LoginPage
