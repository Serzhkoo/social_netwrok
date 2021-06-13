import React from "react";
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader";
import {UserProfileType} from "../../../redux/profile-reducer";

type ProfileInfoPropsType = {
    profile: UserProfileType
}

export function ProfileInfo(props: ProfileInfoPropsType) {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img className={s.contentBackground}
                     src='https://img.wallpapersafari.com/desktop/1920/1080/28/6/MxqLb9.jpg' alt=""/>
            </div>
            <div className={s.descriptionblock}>
                <img src={props.profile.photos.large} alt=""/>
                ava + {props.profile.userId}
            </div>
        </div>
    )

}