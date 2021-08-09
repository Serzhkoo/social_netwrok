import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { Textarea } from '../../common/FormsControls';
import { maxLengthCreator, requiredField } from '../../../helpers/validators/validators';
import React from 'react';

export type AddMessageFormPropsType = {
  newMessageBody: string
}
const maxLength = maxLengthCreator(50);

const AddMessageForm = (props: InjectedFormProps<AddMessageFormPropsType>) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name='newMessageBody'
          placeholder='Enter your message'
          validate={[requiredField, maxLength]}
        />
      </div>
      <div>
        <button>Add message</button>
      </div>
    </form>
  );
};
export const AddMessageReduxForm = reduxForm<AddMessageFormPropsType>({
  form: 'dialogAddMessageForm'
})(AddMessageForm);