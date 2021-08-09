import { addPost, ProfileType } from '../../../redux/profile-reducer';
import { Dispatch } from 'redux';
import { MyPosts } from './MyPosts';
import { connect } from 'react-redux';
import { StateType } from '../../../redux/redux-store';

type MapStateToPropsType = {
  profilePage: ProfileType
}
type MapDispatchToPropsType = {
  addPost: (newPostBody: string) => void
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
  return {
    profilePage: state.profilePage
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