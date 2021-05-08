import s from "./MyPosts.module.css";
import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import {ActionType, AddPostActionCreator, PostsDataType, UpdateNewPostActionCreator} from "../../../redux/state";

type MyPostsPropsType = {
    postsData: Array<PostsDataType>
    newPostText: string
    dispatch: (action: ActionType) => void
}

export function MyPosts(props: MyPostsPropsType) {

    let postsElements = props.postsData.map(t => <Post key={t.id} message={t.message} likeCount={t.likeCount}/>);

    let addPost = () => {
        debugger
        props.dispatch(AddPostActionCreator());
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(UpdateNewPostActionCreator(e.currentTarget.value))
    }

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