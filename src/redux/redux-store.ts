import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { profileReducer } from './profile-reducer';
import { dialogsReducer } from './dialogs-reducer';
import { usersReducer } from './users-reducer';
import { authReducer } from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { appReducer } from './app-reducer';

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer
});

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

//export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.__store__ = store;

export type StateType = ReturnType<typeof rootReducer>;

// export type AppActionsType =
//   UsersActionsType
//   | AuthActionsType
//   | DialogsActionsType
//   | ProfileActionsType
//   | AppReducerActionsType
//
// export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, StateType, unknown, AppActionsType>;
