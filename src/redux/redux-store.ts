import {createStore, combineReducers} from "redux"
import {AddPostAC, profileReducer, UpdateNewPostAC} from "./profile-reducer";
import {AddMessageAC, dialogsReducer, UpdateNewMessageAC} from "./dialogs-reducer";
import {FollowAC, SetUsersAC, UnFollowAC, usersReducer} from "./users-reducer";

export type ActionType =
    ReturnType<typeof AddPostAC>
    | ReturnType<typeof UpdateNewPostAC>
    | ReturnType<typeof AddMessageAC>
    | ReturnType<typeof UpdateNewMessageAC>
    | ReturnType<typeof FollowAC>
    | ReturnType<typeof UnFollowAC>
    | ReturnType<typeof SetUsersAC>

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

export const store = createStore(rootReducer);

// @ts-ignore
window.store = store;

export type StateType = ReturnType<typeof rootReducer>;