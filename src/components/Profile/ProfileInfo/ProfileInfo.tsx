import React from 'react';
import s from './ProfileInfo.module.css';
import { Preloader } from '../../common/Preloader';
import { UserProfileType } from '../../../redux/profile-reducer';
import { ProfileStatus } from './ProfileStatus';

type ProfileInfoPropsType = {
  profile: UserProfileType
  status: string
  updateUserStatus: (userId: string) => void
}

export function ProfileInfo(props: ProfileInfoPropsType) {
  const { status, profile, updateUserStatus } = props;

  if (!profile) {
    return <Preloader/>;
  }

  return (
    <div>
      <div className={s.descriptionblock}>
        <img src={profile.photos.large} alt=""/>
        <ProfileStatus
          status={status}
          updateUserStatus={updateUserStatus}/>
        ava + {profile.userId}
      </div>
    </div>
  );

}

