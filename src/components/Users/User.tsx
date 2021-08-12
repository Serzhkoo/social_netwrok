import { UserType } from '../../redux/users-reducer';
import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../assets/images/userPhoto.png';

type UserPropsType = {
  user: UserType
  followingInProgressUsers: number[]
  unFollow: (userId: number) => void
  follow: (userId: number) => void
}
export const User: React.FC<UserPropsType> = (props) => {
  const { user, followingInProgressUsers, follow, unFollow } = props;
  return (
    <div key={user.id}>
      <span>
        <div>
          <NavLink to={`/profile/${user.id}`}>
            <img src={user.photos.small ? user.photos.small : userPhoto} alt=""/>
          </NavLink>
        </div>
        <div>
          <button disabled={followingInProgressUsers.some(u => u === user.id)}
                  onClick={() => {
                    if (user.followed) {
                      unFollow(user.id);
                    } else {
                      follow(user.id);
                    }
                  }}>
            {user.followed ? 'UnFollow' : 'Follow'}
          </button>
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{'user.location.country'}</div>
          <div>{'user.location.city'}</div>
        </span>
      </span>
    </div>
  );
};