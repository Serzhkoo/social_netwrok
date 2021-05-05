import s from "./Post.module.css";
import React from "react";

type PostType = {
    message: string,
    likeCount: number
}

export function Post(props: PostType) {
    return (
        <div className={s.item}>
            <img
                src='https://twt-thumbs.washtimes.com/media/image/2015/10/20/Rowan_Atkinson_c0-269-1200-968_s885x516.jpg?73654bfb353205d8a409d0b97a2183fbcb215332'/>
            <span>{props.message}</span>
            <div>
                <span>like </span>{props.likeCount}
            </div>
        </div>
    )

}