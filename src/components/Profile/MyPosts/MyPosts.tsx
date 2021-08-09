import s from './MyPosts.module.css';
import React from 'react';
import { Post } from './Post/Post';
import { ProfileType } from '../../../redux/profile-reducer';
import { AddPostFormPropsType, AddPostReduxForm } from './AddNewPostForm/AddNewPostForm';

type MyPostsPropsType = {
  addPost: (newPostBody: string) => void
  profilePage: ProfileType
}

export function MyPosts(props: MyPostsPropsType) {

  const postsElements = props.profilePage.postsData.map(t => <Post key={t.id} message={t.message}
                                                                   likeCount={t.likeCount}/>);

  const addPost = (formData: AddPostFormPropsType) => {
    props.addPost(formData.newPostBody);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddPostReduxForm onSubmit={addPost}/>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
}

