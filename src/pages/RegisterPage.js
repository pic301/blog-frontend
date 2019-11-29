import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate'
import AuthForm from '../components/auth/AuthForm'

const RegisterPage = () => {
    return (
        <div>
             <AuthTemplate>
                <AuthForm type="register"/>
            </AuthTemplate>
        </div>
    );
};

export default RegisterPage;