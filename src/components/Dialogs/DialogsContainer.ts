import {AddMessageAC, DialogsType, UpdateNewMessageAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {StateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    dialogsPage: DialogsType
}
type MapDispatchToPropsType = {
    sendMessage: () => void
    onNewMessageChange: (value: string) => void
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
};
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        sendMessage: () => {
            dispatch(AddMessageAC());
        },
        onNewMessageChange: (text: string) => {
            dispatch(UpdateNewMessageAC(text));
        }
    }
};

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

