import React, {ChangeEvent} from "react";
import {DialogsType} from "../../redux/state";
import {DialogItem} from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";

type DialogsPropsType = {
    state: DialogsType
    addMessage: () => void
    updateNewMessageText: (newMessageText: string) => void
}

export function Dialogs(props: DialogsPropsType) {

    let addMessage = () => {
        props.addMessage()
    }

    let onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {props.updateNewMessageText(e.currentTarget.value)}

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {props.state.dialogsData.map(t => <DialogItem state={t}/>)}
            </div>
            <div>
                <div>
                    <textarea onChange={onMessageChange}
                              value={props.state.newMessageText}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
                <div className={s.messages}>
                    {props.state.messagesData.map(t => <Message message={t.message}/>)}
                </div>
            </div>
        </div>
    )
}