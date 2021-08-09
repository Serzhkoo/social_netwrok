import { Dispatch } from 'react';
import { getAuth, GetAuthType } from './auth-reducer';

type AppReducerType = {
  isInitialized: boolean
}

const initialState: AppReducerType = {
  isInitialized: false
};

export type AppReducerActionsType = SetIsInitializedActionType

type SetIsInitializedActionType = {
  type: 'SET-IS-INITIALIZED'
}

export const appReducer = (state: AppReducerType = initialState, action: AppReducerActionsType): AppReducerType => {
  switch (action.type) {
    case 'SET-IS-INITIALIZED':
      return { ...state, isInitialized: true };
    default:
      return { ...state };
  }
};

const setIsInitializedAC = (): SetIsInitializedActionType => {
  return { type: 'SET-IS-INITIALIZED' } as const;
};

export const initializeApp = () => {
  return (dispatch: Dispatch<AppReducerActionsType | GetAuthType>) => {
    async function initialisation() {
      await dispatch(getAuth());
      await dispatch(setIsInitializedAC());
    }

    initialisation();
  };
};
