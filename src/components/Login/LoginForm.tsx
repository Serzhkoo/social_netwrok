import React from 'react';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import { Input } from '../common/FormsControls';
import { maxLengthCreator, requiredField } from '../../helpers/validators/validators';
import styles from './../common/FormsControls.module.css';

export type FormDataType = {
  email: string
  password: string
  rememberMe: boolean
}

const maxLength = maxLengthCreator(50);

export const LoginForm = (props: InjectedFormProps<FormDataType>) => {
  const summaryError = props.error;
  const formClassName = `${styles.formSummary} ${summaryError ? styles.formSummaryError : ''}`;

  return (
    <form onSubmit={props.handleSubmit} className={formClassName}>
      <div>
        <Field
          component={Input}
          placeholder={'Email'}
          name={'email'}
          validate={[requiredField, maxLength]}
        />
      </div>
      <div>
        <Field
          component={Input}
          type={'password'}
          placeholder={'Password'}
          name={'password'}
          validate={[requiredField, maxLength]}
        />
      </div>
      <div>
        <Field
          component={'input'}
          type={'checkbox'}
          name={'rememberMe'}/> remember me
      </div>
      <div style={{ height: '20px', color: 'red' }}>
        {summaryError}
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

export const LoginReduxForm = reduxForm<FormDataType>({
  form: 'login'
})(LoginForm);