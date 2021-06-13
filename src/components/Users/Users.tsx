import {UserType} from "../../redux/users-reducer";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/userPhoto.png";
import React from "react";
import {NavLink} from "react-router-dom";

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

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={styles.users}>
            <div>
                {pages.map((page, index) => <span key={index}
                                                  onClick={() => props.onPageChanged(page)}
                                                  className={props.currentPage === page ? styles.selectedPage : styles.page}>
                        {`${page} `}
                    </span>)}
            </div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <NavLink to={`/profile/${user.id}`}>
                                <img src={user.photos.small ? user.photos.small : userPhoto} alt=""/>
                            </NavLink>
                        </div>
                        <div>
                            <button disabled={props.followingInProgressUsers.some(u => u === user.id)}
                                    onClick={() => {
                                if (user.followed) {
                                    props.unFollow(user.id);
                                } else {
                                    props.follow(user.id);
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
                            <div>{"user.location.country"}</div>
                            <div>{"user.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}