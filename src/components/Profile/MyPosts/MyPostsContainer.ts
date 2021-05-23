import {AddPostAC, ProfileType, UpdateNewPostAC} from "../../../redux/profile-reducer";
import {Dispatch} from "redux";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {StateType} from "../../../redux/redux-store";

type MapStateToPropsType = {
    profilePage: ProfileType
}
type MapDispatchToPropsType = {
    addPost: () => void
    onNewPostChange: (value: string) => void
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
};
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(AddPostAC());
        },
        onNewPostChange: (text: string) => {
            dispatch(UpdateNewPostAC(text));
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);