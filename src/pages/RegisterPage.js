import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate'
import Registerform from '../containers/auth/RegisterForm'

const RegisterPage = () => {
    return (
        <div>
             <AuthTemplate>
                <Registerform />
            </AuthTemplate>
        </div>
    );
};

export default RegisterPage;