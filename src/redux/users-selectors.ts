import { StateType } from './redux-store';
import { UserType } from './users-reducer';

export const getUsers = (state: StateType): UserType[] => {
  return state.usersPage.users;
};

export const getPageSize = (state: StateType): number => {
  return state.usersPage.pageSize;
};

export const getTotalUsersCount = (state: StateType): number => {
  return state.usersPage.totalUsersCount;
};

export const getCurrentPage = (state: StateType): number => {
  return state.usersPage.currentPage;
};

export const getIsFetching = (state: StateType): boolean => {
  return state.usersPage.isFetching;
};

export const getFollowingInProgressUsers = (state: StateType): number[] => {
  return state.usersPage.followingInProgressUsers;
};
