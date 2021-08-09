import React, { ComponentType } from 'react';
import { Profile } from './Profile';
import { StateType } from '../../redux/redux-store';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, updateUserStatus, UserProfileType } from '../../redux/profile-reducer';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

type PathParamsType = {
  userId: string
}

type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & PropsType

type MapStateToPropsType = {
  profile: UserProfileType
  status: string
  authorizedUserId: number | null
  isAuth: boolean
}

type PropsType = MapStateToPropsType & {
  getUserProfile: (userId: string) => void
  getUserStatus: (userId: string) => void
  updateUserStatus: (status: string) => void
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

  componentDidMount(): void {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = String(this.props.authorizedUserId);
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  render() {

    return (
      <div>
        <Profile
          profile={this.props.profile}
          status={this.props.status}
          updateUserStatus={this.props.updateUserStatus}/>
      </div>
    );

  }
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.data.id,
    isAuth: state.auth.isAuth
  };
};

export default compose<ComponentType>(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);

