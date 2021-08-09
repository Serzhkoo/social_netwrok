import React from 'react';
import { WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form';
import styles from './FormsControls.module.css';

type FormControlPropsType = {
  meta: WrappedFieldMetaProps
}

const FormControl: React.FC<FormControlPropsType> = ({ meta: { touched, error }, children }) => {
  const hasError = error && touched;
  const textAreaClassName = `${styles.formControl} ${hasError ? styles.error : ''}`;

  return (
    <div className={textAreaClassName}>
      {children}
      <div className={styles.errorText}>{hasError && error}</div>
    </div>
  );
};

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
  const { input, meta, ...restProps } = props;

  return (
    <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
  );
};

export const Input: React.FC<WrappedFieldProps> = (props) => {
  const { input, meta, ...restProps } = props;

  return (
    <FormControl {...props}><input {...input} {...restProps}/></FormControl>
  );
};

// export const Textarea: React.FC<WrappedFieldProps> = ({
//                                                         input,
//                                                         meta,
//                                                         ...props
//                                                       }) => {
//   const hasError = meta.error && meta.touched
//   const textAreaClassName = `${styles.formControl} ${hasError ? styles.error : ''}`;
//
//   return (
//     <div className={textAreaClassName}>
//       <textarea {...input} {...props}/>
//       <div className={styles.errorText}>{hasError && meta.error}</div>
//     </div>
//   );
// };
//
// export const Input: React.FC<WrappedFieldProps> = ({
//                                                         input,
//                                                         meta,
//                                                         ...props
//                                                       }) => {
//   const hasError = meta.error && meta.touched
//   const textAreaClassName = `${styles.formControl} ${hasError ? styles.error : ''}`;
//
//   return (
//     <div className={textAreaClassName}>
//       <input {...input} {...props}/>
//       <div className={styles.errorText}>{hasError && meta.error}</div>
//     </div>
//   );
// };
