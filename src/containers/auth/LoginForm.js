import React ,{ useEffect }from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import { withRouter } from  'react-router-dom';
import { changeField , initializeForm, login } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { check } from '../../modules/user';




const LoginForm = ({ history }) => {
    const dispatch = useDispatch()
    const { form ,auth, authError, user} = useSelector(({ auth, user }) => ({
        form: auth.login,
        auth: auth.auth,
        authError: authError,
        user: user.user,
    }))

 const onChange = (e) => {
    const { value, name } = e.target
    dispatch(
        changeField({
            form:'login',
            key:name,
            value
        })
    )
 }
 
 const onSubmit = (e) => {
     e.prevent.default()
     const {username, password} = form;
     dispatch(login(username,password))
 }
 useEffect(() => {
    dispatch(initializeForm('login')); 
 },[dispatch]);
 useEffect(() => {
    if(authError){
        console.log('오류발생');
        console.log(auth);
        return;
    }
    if(auth){
        console.log('로그인 성공');
        console.log(auth);  
        dispatch(check());
    }

 },[auth, authError, dispatch])

useEffect(() => {
if(user){
    history.push('/')
}
} ,[user,history])
    

    
    return (
       <AuthForm
       type="login"
       form={form}
       onChange={onChange}
       onSubmit={onSubmit}
       />
    );
};

export default withRouter(LoginForm);