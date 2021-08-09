import React from "react";
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader";
import {UserProfileType} from "../../../redux/profile-reducer";
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoPropsType = {
    profile: UserProfileType
    status: string
    updateUserStatus: (userId: string) => void
}

export function ProfileInfo(props: ProfileInfoPropsType) {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            {/*<div>
                <img className={s.contentBackground}
                     src='https://img.wallpapersafari.com/desktop/1920/1080/28/6/MxqLb9.jpg' alt=""/>
            </div>*/}
            <div className={s.descriptionblock}>
                <img src={props.profile.photos.large} alt=""/>
                <ProfileStatus
                    status={props.status}
                    updateUserStatus={props.updateUserStatus}/>
                ava + {props.profile.userId}
            </div>
        </div>
    )

}

