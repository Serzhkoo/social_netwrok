import {addMessage, DialogsType} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch, compose} from "redux";
import {StateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {ComponentType} from "react";

type MapStateToPropsType = {
    dialogsPage: DialogsType
}
type MapDispatchToPropsType = {
    sendMessage: (value: string) => void
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
};
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(addMessage(newMessageBody));
        }
    }
};

export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
