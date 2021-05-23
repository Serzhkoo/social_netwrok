import React, {ChangeEvent} from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogsType} from "../../redux/dialogs-reducer";

type DialogsPropsType = {
    sendMessage: () => void
    onNewMessageChange: (value: string) => void
    dialogsPage: DialogsType
}

export function Dialogs(props: DialogsPropsType) {

    let sendMessage = () => {
        props.sendMessage()
    };

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {props.onNewMessageChange(e.currentTarget.value)};

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {props.dialogsPage.dialogsData.map(t => <DialogItem key={t.id} state={t}/>)}
            </div>
            <div>
                <div>
                    <textarea onChange={onNewMessageChange}
                              value={props.dialogsPage.newMessageText}/>
                </div>
                <div>
                    <button onClick={sendMessage}>Add message</button>
                </div>
                <div className={s.messages}>
                    {props.dialogsPage.messagesData.map(t => <Message key={t.id} message={t.message}/>)}
                </div>
            </div>
        </div>
    )
}