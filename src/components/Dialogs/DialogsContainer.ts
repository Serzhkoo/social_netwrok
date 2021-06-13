import {AddMessage, DialogsType, UpdateNewMessage} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {StateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    dialogsPage: DialogsType
    isAuth: boolean
}
type MapDispatchToPropsType = {
    sendMessage: () => void
    onNewMessageChange: (value: string) => void
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
};
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        sendMessage: () => {
            dispatch(AddMessage());
        },
        onNewMessageChange: (text: string) => {
            dispatch(UpdateNewMessage(text));
        }
    }
};

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

