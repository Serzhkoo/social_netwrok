import React from "react";
import s from "./../Dialogs.module.css"


type MessageType = {
    message: string
}

export function Message(props: MessageType) {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )

}