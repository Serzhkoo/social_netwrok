import s from "./MyPosts.module.css";
import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import {PostsDataType} from "../../../redux/state";

type MyPostsPropsType = {
    postsData: Array<PostsDataType>
    addPost: () => void
    newPostText: string
    updateNewPostText: (postMessage: string) => void
}

export function MyPosts(props: MyPostsPropsType) {

    let postsElements = props.postsData.map(t => <Post key={t.id} message={t.message} likeCount={t.likeCount}/>);

    let addPost = () => {
            props.addPost();
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {props.updateNewPostText(e.currentTarget.value)}

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              value={props.newPostText}/>
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