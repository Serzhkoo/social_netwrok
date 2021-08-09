import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/profile-reducer";

type ProfilePropsType = {
    profile: UserProfileType
    status: string
    updateUserStatus: (userId: string) => void
}

export function Profile(props: ProfilePropsType) {

    return (
        <div>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateUserStatus={props.updateUserStatus}/>
            <MyPostsContainer />
        </div>
    )

}