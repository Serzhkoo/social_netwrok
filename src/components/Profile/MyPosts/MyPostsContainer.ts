import { addPost, PostsDataType } from '../../../redux/profile-reducer';
import { Dispatch } from 'redux';
import { MyPosts } from './MyPosts';
import { connect } from 'react-redux';
import { StateType } from '../../../redux/redux-store';

type MapStateToPropsType = {
  postsData: PostsDataType[]
}
type MapDispatchToPropsType = {
  addPost: (newPostBody: string) => void
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
  return {
    postsData: state.profilePage.postsData
  };
};
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    addPost: (newPostBody: string) => {
      dispatch(addPost(newPostBody));
    }
  };
};

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);