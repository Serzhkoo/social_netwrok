import React from 'react';
import { DialogItem } from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import { Message } from './Message/Message';
import { DialogsType } from '../../redux/dialogs-reducer';
import { AddMessageFormPropsType, AddMessageReduxForm } from './AddMessageForm/AddMessageForm';

type DialogsPropsType = {
  sendMessage: (value: string) => void
  dialogsPage: DialogsType
  isAuth: boolean
}

export function Dialogs(props: DialogsPropsType) {

  let sendMessage = (formData: AddMessageFormPropsType) => {
    props.sendMessage(formData.newMessageBody);
  };

  //if (!props.isAuth) return <Redirect to={'/login'}/>

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {props.dialogsPage.dialogsData.map(t => <DialogItem key={t.id} state={t}/>)}
      </div>
      <div>
        <div className={s.messages}>
          {props.dialogsPage.messagesData.map(t => <Message key={t.id} message={t.message}/>)}
        </div>
        <AddMessageReduxForm onSubmit={sendMessage}/>
      </div>
    </div>
  );
}
