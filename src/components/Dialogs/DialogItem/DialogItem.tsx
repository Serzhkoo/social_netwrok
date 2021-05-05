import React from "react";
import {NavLink} from "react-router-dom";
import {DialogsDataType} from "../../../redux/state";
import s from "./../Dialogs.module.css"

type DialoggItemPropsType = {
    state: DialogsDataType
}

export function DialogItem(props: DialoggItemPropsType) {
    let path: string = "/dialogs/" + props.state.id
    return (
        <div className={s.dialog}>
            <NavLink activeClassName={s.active} to={path}><img src={props.state.picture} alt=""/>{props.state.name}
            </NavLink>
        </div>
    )
}
