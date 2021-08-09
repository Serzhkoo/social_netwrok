import { Dispatch } from 'react';
import { authAPI } from '../api/api';
import { FormAction, stopSubmit } from 'redux-form';

export type AuthDataType = {
  id: number | null
  email: string | null
  login: string | null
}

type AuthType = {
  isAuth: boolean,
  data: AuthDataType
}

export type AuthActionsType = SetAuthUserDataActionType;

export type GetAuthType = ReturnType<typeof getAuth>

type SetAuthUserDataActionType = {
  type: 'SET-AUTH-USER-DATA'
  data: AuthDataType
  isAuth: boolean
}

const initialState: AuthType = {
  isAuth: false,
  data: {
    id: null,
    email: null,
    login: null
  }
};

export const authReducer = (state: AuthType = initialState, action: AuthActionsType) => {
  switch (action.type) {
    case 'SET-AUTH-USER-DATA':
      return { ...state, data: { ...action.data }, isAuth: action.isAuth };
    default:
      return state;
  }
};

export const setAuthUserData = (data: AuthDataType, isAuth: boolean): SetAuthUserDataActionType => {
  return { type: 'SET-AUTH-USER-DATA', data, isAuth } as const;
};

export const getAuth = () => {
  return (dispatch: Dispatch<AuthActionsType>) => {
    return authAPI.getAuth()
      .then(data => {
        if (!data.resultCode) {
          dispatch(setAuthUserData(data.data, true));
        }
      });
  };
};

export const login = (email: string, password: string, rememberMe: boolean = false) => {
  return (dispatch: Dispatch<AuthActionsType | GetAuthType | FormAction>) => {
    authAPI.login({ email, password, rememberMe })
      .then(data => {
        if (!data.resultCode) {
          dispatch(getAuth());
        } else {
          const message = data.messages.length ? data.messages[0] : 'Some error';
          dispatch(stopSubmit('login', { _error: message }));
        }
      });
  };
};

export const logout = () => {
  return (dispatch: Dispatch<AuthActionsType>) => {
    authAPI.logout()
      .then(data => {
        if (!data.resultCode) {
          dispatch(setAuthUserData({
            id: null,
            email: null,
            login: null
          }, false));
        }
      });
  };
};
