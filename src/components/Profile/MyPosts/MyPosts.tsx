import s from "./MyPosts.module.css";
import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import {ProfileType} from "../../../redux/profile-reducer";

type MyPostsPropsType = {
    onNewPostChange: (value: string) => void
    addPost: () => void
    profilePage: ProfileType
}

export function MyPosts(props: MyPostsPropsType) {

    const postsElements = props.profilePage.postsData.map(t => <Post key={t.id} message={t.message} likeCount={t.likeCount}/>);

    const addPost = () => {
        props.addPost();
    }

    const onNewPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onNewPostChange(e.currentTarget.value)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onNewPostChange}
                              value={props.profilePage.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}