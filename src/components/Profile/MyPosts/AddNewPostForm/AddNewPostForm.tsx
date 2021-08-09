import { maxLengthCreator, requiredField } from '../../../../helpers/validators/validators';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { Textarea } from '../../../common/FormsControls';
import React from 'react';

export type AddPostFormPropsType = {
  newPostBody: string
}
const maxLength = maxLengthCreator(30);
const AddNewPostForm = (props: InjectedFormProps<AddPostFormPropsType>) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name='newPostBody'
          placeholder='Enter Your post'
          validate={[requiredField, maxLength]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};
export const AddPostReduxForm = reduxForm<AddPostFormPropsType>({ form: 'profileAddPostForm' })(AddNewPostForm);