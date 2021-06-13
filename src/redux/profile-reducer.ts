import {ActionType} from "./redux-store";
import {Dispatch} from "react";
import {profileAPI} from "../api/api";

type PostsDataType = {
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
    newPostText: string
    profile: UserProfileType
};

const initialState: ProfileType = {
    postsData: [
        {id: 1, message: 'Hi, how are you', likeCount: 10},
        {id: 2, message: 'It\'s my first post', likeCount: 15},
        {id: 3, message: 'Oops', likeCount: 30},
        {id: 4, message: 'Blablabla', likeCount: 1}
    ],
    newPostText: '',
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

export const profileReducer = (state: ProfileType = initialState, action: ActionType): ProfileType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            };
        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText: action.newText
            };
        case 'SET-USER-PROFILE':
            return {
                ...state,
                profile: action.profile
            };
        default:
            return state;
    }
};
export const addPost = () => {
    return {type: 'ADD-POST'} as const
}
export const updateNewPost = (newText: string) => {
    return {type: 'UPDATE-NEW-POST-TEXT', newText} as const
}
export const setUserProfile = (profile: UserProfileType) => {
    return {type: 'SET-USER-PROFILE', profile} as const
}

export const getUserProfile = (userId: string) => {
    return (dispatch: Dispatch<ActionType>) => {
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            });
    }
}