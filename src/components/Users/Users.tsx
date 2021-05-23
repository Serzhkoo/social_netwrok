import React from "react";
import {UserType} from "../../redux/users-reducer";
import s from "./Users.module.css"

type UsersPropsType = {
    users: UserType[]
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: UserType[]) => void
}

export function Users(props: UsersPropsType) {

    return (
        <div className={s.users}>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <img src={user.picture} alt=""/>
                        </div>
                        <div>
                            <button onClick={() => {user.followed ? props.unFollow(user.id) : props.follow(user.id)}}>
                                {user.followed ? 'UnFollow' : 'Follow'}
                            </button>
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.fullName}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{user.location.country}</div>
                            <div>{user.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}