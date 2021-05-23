import {Users} from "./Users";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {FollowAC, SetUsersAC, UnFollowAC, UserType} from "../../redux/users-reducer";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    users: UserType[]
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
};
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: number) => {
            dispatch(FollowAC(userId));
        },
        unFollow: (userId: number) => {
            dispatch(UnFollowAC(userId));
        },
        setUsers: (users: UserType[]) => {
            dispatch(SetUsersAC(users));
        }
    }
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)