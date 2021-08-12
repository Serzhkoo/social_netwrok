import { connect } from 'react-redux';
import { StateType } from '../../redux/redux-store';
import {
  follow,
  requestUsers,
  unFollow,
  UserType
} from '../../redux/users-reducer';
import React, { ComponentType } from 'react';
import { Users } from './Users';
import { Preloader } from '../common/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {
  getCurrentPage, getFollowingInProgressUsers,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers
} from '../../redux/users-selectors';

type MapStateToPropsType = {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgressUsers: number[]
}

type UsersContainerPropsType = MapStateToPropsType & {
  follow: (userId: number) => void
  unFollow: (userId: number) => void
  requestUsers: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<UsersContainerPropsType> {

  componentDidMount(): void {
    const { currentPage, pageSize } = this.props;
    this.props.requestUsers(currentPage, pageSize);
  }

  onPageChanged = (pageNumber: number) => {
    const { pageSize } = this.props;
    this.props.requestUsers(pageNumber, pageSize);
  };

  render() {
    const { followingInProgressUsers, follow, unFollow, users, currentPage, pageSize, totalUsersCount, isFetching } = this.props;
    return (
      <>
        {isFetching ? <Preloader/> : null}
        <Users totalUsersCount={totalUsersCount}
               pageSize={pageSize}
               onPageChanged={this.onPageChanged}
               currentPage={currentPage}
               users={users}
               unFollow={unFollow}
               follow={follow}
               followingInProgressUsers={followingInProgressUsers}
        />
      </>
    );
  }
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgressUsers: getFollowingInProgressUsers(state)
  };
};

export default compose<ComponentType>(connect(mapStateToProps, { requestUsers, follow, unFollow }),
  withAuthRedirect)(UsersContainer);