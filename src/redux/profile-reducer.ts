import {ActionType} from "./redux-store";

type PostsDataType = {
    id: number
    message: string
    likeCount: number
};
export type ProfileType = {
    postsData: Array<PostsDataType>
    newPostText: string
};

const initialState: ProfileType = {
    postsData: [
        {id: 1, message: 'Hi, how are you', likeCount: 10},
        {id: 2, message: 'It\'s my first post', likeCount: 15},
        {id: 3, message: 'Oops', likeCount: 30},
        {id: 4, message: 'Blablabla', likeCount: 1}
    ],
    newPostText: ''
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
        default:
            return state;
    }
};
export const AddPostAC = () => {
    return {type: 'ADD-POST'} as const
}
export const UpdateNewPostAC = (text: string) => {
    return {type: 'UPDATE-NEW-POST-TEXT', newText: text} as const
}