import { usersAPI } from '../api/api';
import { Dispatch } from 'react';
import { updateObjectInArray } from '../helpers/object-helpers';

export type PhotosType = {
  small: string
  large: string
}

export type UserType = {
  name: string
  id: number
  uniqueUrlName: string
  photos: PhotosType
  status: string
  followed: boolean
}

type UsersType = {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgressUsers: number[]
}

export type UsersActionsType =
  FollowSuccessActionType
  | UnFollowSuccessActionType
  | SetUsersActionType
  | SetCurrentPageActionType
  | SetTotalUsersCountActionType
  | ToggleIsFetchingActionType
  | ToggleIsFollowingInProgressActionType

type FollowSuccessActionType = {
  type: 'FOLLOW'
  userId: number
}
type UnFollowSuccessActionType = {
  type: 'UN-FOLLOW'
  userId: number
}
type SetUsersActionType = {
  type: 'SET-USERS'
  users: UserType[]
}
type SetCurrentPageActionType = {
  type: 'SET-CURRENT-PAGE'
  pageNumber: number
}
type SetTotalUsersCountActionType = {
  type: 'SET-TOTAL-USERS-COUNT'
  totalUsersCount: number
}
type ToggleIsFetchingActionType = {
  type: 'TOGGLE-IS-FETCHING'
  isFetching: boolean
}
type ToggleIsFollowingInProgressActionType = {
  type: 'TOGGLE-IS-FOLLOWING-IN-PROGRESS'
  isFollowingInProgress: boolean
  userId: number
}

const initialState: UsersType = {
  users: [],
  pageSize: 50,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgressUsers: []
};

export const usersReducer = (state: UsersType = initialState, action: UsersActionsType) => {
  switch (action.type) {
    case 'FOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', { followed: true })
      };
    case 'UN-FOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', { followed: false })
      };
    case 'SET-USERS':
      return { ...state, users: [...action.users] };
    case 'SET-CURRENT-PAGE':
      return { ...state, currentPage: action.pageNumber };
    case 'SET-TOTAL-USERS-COUNT':
      return { ...state, totalUsersCount: action.totalUsersCount };
    case 'TOGGLE-IS-FETCHING':
      return { ...state, isFetching: action.isFetching };
    case 'TOGGLE-IS-FOLLOWING-IN-PROGRESS':
      return {
        ...state, followingInProgressUsers: action.isFollowingInProgress
          ? [...state.followingInProgressUsers, action.userId]
          : state.followingInProgressUsers.filter(user => user !== action.userId)
      };
    default:
      return state;
  }
};

export const followSuccess = (userId: number): FollowSuccessActionType => {
  return { type: 'FOLLOW', userId } as const;
};
export const unFollowSuccess = (userId: number): UnFollowSuccessActionType => {
  return { type: 'UN-FOLLOW', userId } as const;
};
export const setUsers = (users: UserType[]): SetUsersActionType => {
  return { type: 'SET-USERS', users } as const;
};
export const setCurrentPage = (pageNumber: number): SetCurrentPageActionType => {
  return { type: 'SET-CURRENT-PAGE', pageNumber } as const;
};
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType => {
  return { type: 'SET-TOTAL-USERS-COUNT', totalUsersCount } as const;
};
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => {
  return { type: 'TOGGLE-IS-FETCHING', isFetching } as const;
};
export const toggleIsFollowingInProgress = (isFollowingInProgress: boolean, userId: number): ToggleIsFollowingInProgressActionType => {
  return { type: 'TOGGLE-IS-FOLLOWING-IN-PROGRESS', isFollowingInProgress, userId } as const;
};

export const requestUsers = (currentPage: number, pageSize: number) => async (dispatch: Dispatch<UsersActionsType>) => {
  dispatch(setCurrentPage(currentPage));
  dispatch(toggleIsFetching(true));
  const data = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
};

const followUnFollowFlow = async (dispatch: Dispatch<UsersActionsType>, userId: number, apiMethod: (userId: number) => Promise<{ resultCode: number }>, actionCreator: (userId: number) => { type: 'FOLLOW' | 'UN-FOLLOW', userId: number }) => {
  dispatch(toggleIsFollowingInProgress(true, userId));
  const data = await apiMethod(userId);
  if (!data.resultCode) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleIsFollowingInProgress(false, userId));
};

export const follow = (userId: number) => async (dispatch: Dispatch<UsersActionsType>) => {
  await followUnFollowFlow(dispatch, userId, usersAPI.followUser, followSuccess);
};

export const unFollow = (userId: number) => async (dispatch: Dispatch<UsersActionsType>) => {
  await followUnFollowFlow(dispatch, userId, usersAPI.unFollowUser, unFollowSuccess);
};
