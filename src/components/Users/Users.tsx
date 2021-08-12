import { UserType } from '../../redux/users-reducer';
import styles from './Users.module.css';
import React from 'react';
import { Paginator } from '../common/Paginator';
import { User } from './User';

type UsersPropsType = {
  totalUsersCount: number
  pageSize: number
  onPageChanged: (pageNumber: number) => void
  currentPage: number
  followingInProgressUsers: number[]
  users: UserType[]
  unFollow: (userId: number) => void
  follow: (userId: number) => void
}

export function Users(props: UsersPropsType) {
  const {
    totalUsersCount,
    pageSize,
    onPageChanged,
    currentPage,
    followingInProgressUsers,
    users,
    unFollow,
    follow
  } = props;
  return (
    <div className={styles.users}>
      <Paginator
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        onPageChanged={onPageChanged}
        currentPage={currentPage}
        portionSize={20}
      />
      {
        users.map(user => <User
          key={user.id}
          user={user}
          followingInProgressUsers={followingInProgressUsers}
          unFollow={unFollow}
          follow={follow}
        />)
      }
    </div>
  );
}

