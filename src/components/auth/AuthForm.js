import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button'
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

/**
 * 회원가입 또는 로그인 폼
 */

const AuthFormBlock = styled.div`
    margin: 0px;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
`;
const StyledInput = styled.input`
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid ${palette.gray[5]};
    padding-bottom: 0.5rem;
    outline: none;
    width: 100%;
    &:focus{
        color: $oc-teal-7;
        border-bottom: 1px solid ${palette.gray[7]};

    }
    &+&{
        margin-top: 1rem;
    }
`;
const Footer = styled.div`
    margin-top: 2rem;
    text-align: right;
    a{
        color: ${palette.gray[6]};
        text-decoration: underline;
        &:hover{
            color: ${palette.gray[9]}
        }
    }
`;
const ButtonWithMarginTop = styled(Button)`
    margin-top:1rem;
`;
const textMap = {
    login: '로그인',
    register:'회원가입'
}

const AuthForm = ({type}) => {
    const text = textMap[type]
    return (
        <AuthFormBlock>
            <h3>{text}</h3>
            <form>
            <StyledInput autoComplete="username" name="username" placeholder="아이디"/>
            <StyledInput 
                autoComplete="new-password"
                name="password"
                placeholder="비밀번호"
                type="password"
            />
            {type === 'register' && (
              <StyledInput 
                autoComplete="new-password"
                name="passwordConfirm"
                placeholder="비밀번호 확인"
                type="password"
            />
            )}
            <ButtonWithMarginTop cyan fullWidth>
                {text}
            </ButtonWithMarginTop>
            </form>
            <Footer>
                {type === 'register' ?<Link to="/register">{text}</Link> :
            <Link to="/login">{text}</Link>
            }
               
            </Footer>
        </AuthFormBlock>
    );
};

export default AuthForm;