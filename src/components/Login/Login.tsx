import React from 'react';
import { FormDataType, LoginReduxForm } from './LoginForm';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { StateType } from '../../redux/redux-store';
import {Redirect} from 'react-router-dom';

type LoginFCPropsType = {
  login: (login: string, password: string, rememberMe: boolean) => void
  isAuth: boolean
}

export const LoginFC: React.FC<LoginFCPropsType> = ({ login, isAuth }) => {
  const onSubmit = (formData: FormDataType) => {
    login(formData.email, formData.password, formData.rememberMe);
  };

  if (isAuth) {
    return <Redirect to={'/profile'}/>
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  );
};

const mapStateToProps = (state: StateType): { isAuth: boolean } => {
  return {
    isAuth: state.auth.isAuth
  };
};

export const Login = connect(mapStateToProps, { login })(LoginFC);
