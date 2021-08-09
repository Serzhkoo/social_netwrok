import { usersAPI } from '../api/api';
import { Dispatch } from 'react';

type PhotosType = {
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
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgressUsers: []
}

export const usersReducer = (state: UsersType = initialState, action: UsersActionsType) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true};
                    }
                    return user;
                })
            };
        case 'UN-FOLLOW':
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false};
                    }
                    return user;
                })
            };
        case 'SET-USERS':
            return {...state, users: [...action.users]};
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.pageNumber};
        case 'SET-TOTAL-USERS-COUNT':
            return {...state, totalUsersCount: action.totalUsersCount};
        case 'TOGGLE-IS-FETCHING':
            return {...state, isFetching: action.isFetching};
        case 'TOGGLE-IS-FOLLOWING-IN-PROGRESS':
            return {
                ...state, followingInProgressUsers: action.isFollowingInProgress
                    ? [...state.followingInProgressUsers, action.userId]
                    : state.followingInProgressUsers.filter(user => user !== action.userId)
            };
        default:
            return state;
    }
}

export const followSuccess = (userId: number): FollowSuccessActionType => {
    return {type: 'FOLLOW', userId} as const
};
export const unFollowSuccess = (userId: number): UnFollowSuccessActionType => {
    return {type: 'UN-FOLLOW', userId} as const
};
export const setUsers = (users: UserType[]): SetUsersActionType => {
    return {type: 'SET-USERS', users} as const
};
export const setCurrentPage = (pageNumber: number): SetCurrentPageActionType => {
    return {type: 'SET-CURRENT-PAGE', pageNumber} as const
};
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType => {
    return {type: 'SET-TOTAL-USERS-COUNT', totalUsersCount} as const
};
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => {
    return {type: 'TOGGLE-IS-FETCHING', isFetching} as const
};
export const toggleIsFollowingInProgress = (isFollowingInProgress: boolean, userId: number): ToggleIsFollowingInProgressActionType => {
    return {type: 'TOGGLE-IS-FOLLOWING-IN-PROGRESS', isFollowingInProgress, userId} as const
}

export const requestUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<UsersActionsType>) => {
        dispatch(setCurrentPage(currentPage));
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            });
    }
}

export const follow = (userId: number) => {
    return (dispatch: Dispatch<UsersActionsType>) => {
        dispatch(toggleIsFollowingInProgress(true, userId));
        usersAPI.followUser(userId)
            .then(data => {
                if (!data.resultCode) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleIsFollowingInProgress(false, userId));
            })
    }
}

export const unFollow = (userId: number) => {
    return (dispatch: Dispatch<UsersActionsType>) => {
        dispatch(toggleIsFollowingInProgress(true, userId));
        usersAPI.unFollowUser(userId)
            .then(data => {
                if (!data.resultCode) {
                    dispatch(unFollowSuccess(userId))
                }
                dispatch(toggleIsFollowingInProgress(false, userId));
            })
    }
}
