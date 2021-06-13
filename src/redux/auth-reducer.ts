import {ActionType} from "./redux-store";
import {Dispatch} from "react";
import {authAPI} from "../api/api";

export type AuthDataType = {
    id: number | null
    email: string | null
    login: string | null
}

type AuthType = {
    isAuth: boolean,
    data: AuthDataType
}

const initialState: AuthType = {
    isAuth: false,
    data: {
        id: null,
        email: null,
        login: null
    }
}

export const authReducer = (state: AuthType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'SET-AUTH-USER-DATA':
            return {...state, data: {...action.data}, isAuth: true};
        default:
            return state;
    }
}

export const setAuthUserData = (data: AuthDataType) => {
    return {type: 'SET-AUTH-USER-DATA', data} as const
};

export const getAuth = () => {
    return (dispatch: Dispatch<ActionType>) => {
        authAPI.getAuth()
            .then(data => {
                if (!data.resultCode) {
                    dispatch(setAuthUserData(data.data))
                }
            });
    }
}