import React from "react";
import s from './ProfileInfo.module.css'

export function ProfileInfo() {
    return (
        <div>
            <div>
                <img className={s.contentBackground}
                     src='https://img.wallpapersafari.com/desktop/1920/1080/28/6/MxqLb9.jpg'/>
            </div>
            <div className={s.descriptionblock}>
                ava + description
            </div>
        </div>
    )

}