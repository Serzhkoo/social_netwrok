import { Dispatch } from 'redux';
import { profileAPI } from '../api/api';

export type PostsDataType = {
  id: number
  message: string
  likeCount: number
};

export type UserProfileType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
  }
  photos: {
    small: string
    large: string
  }
}

export type ProfileType = {
  postsData: Array<PostsDataType>
  status: string
  profile: UserProfileType
};

export type ProfileActionsType =
  AddPostActionType
  | SetUserProfileActionType
  | SetUserStatusActionType

type AddPostActionType = {
  type: 'ADD-POST'
  newPostBody: string
}
type SetUserProfileActionType = {
  type: 'SET-USER-PROFILE'
  profile: UserProfileType
}
type SetUserStatusActionType = {
  type: 'SET-USER-STATUS'
  status: string
}

const initialState: ProfileType = {
  postsData: [
    { id: 1, message: 'Hi, how are you', likeCount: 10 },
    { id: 2, message: 'It\'s my first post', likeCount: 15 },
    { id: 3, message: 'Oops', likeCount: 30 },
    { id: 4, message: 'Blablabla', likeCount: 1 }
  ],
  status: '',
  profile: {
    userId: 0,
    lookingForAJob: false,
    lookingForAJobDescription: '',
    fullName: '',
    contacts: {
      github: '',
      vk: '',
      facebook: '',
      instagram: '',
      twitter: '',
      website: '',
      youtube: '',
      mainLink: ''
    },
    photos: {
      small: '',
      large: ''
    }
  }
};

export const profileReducer = (state: ProfileType = initialState, action: ProfileActionsType): ProfileType => {
  switch (action.type) {
    case 'ADD-POST':
      const newPost = {
        id: 5,
        message: action.newPostBody,
        likeCount: 0
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost]
      };
    case 'SET-USER-PROFILE':
      return {
        ...state,
        profile: action.profile
      };
    case 'SET-USER-STATUS':
      return {
        ...state,
        status: action.status
      };
    default:
      return state;
  }
};
export const addPost = (newPostBody: string): AddPostActionType => {
  return { type: 'ADD-POST', newPostBody } as const;
};
export const setUserProfile = (profile: UserProfileType): SetUserProfileActionType => {
  return { type: 'SET-USER-PROFILE', profile } as const;
};
export const setUserStatus = (status: string): SetUserStatusActionType => {
  return { type: 'SET-USER-STATUS', status } as const;
};

export const getUserProfile = (userId: string) => async (dispatch: Dispatch<ProfileActionsType>) => {
  const response = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};

export const getUserStatus = (userId: string) => async (dispatch: Dispatch<ProfileActionsType>) => {
  const response = await profileAPI.getStatus(userId);
  dispatch(setUserStatus(response.data));
};

export const updateUserStatus = (status: string) => async (dispatch: Dispatch<ProfileActionsType>) => {
  const response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setUserStatus(status));
  }
};