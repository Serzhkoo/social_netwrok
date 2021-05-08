export type DialogsDataType = {
    id: number
    name: string
    picture: string
}
export type MessagesDataType = {
    id: number
    message: string
}
export type PostsDataType = {
    id: number
    message: string
    likeCount: number
}
export type DialogsType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
    newMessageText: string
}
export type ProfileType = {
    postsData: Array<PostsDataType>
    newPostText: string
}
export type StateType = {
    dialogsPage: DialogsType
    profilePage: ProfileType
}

export type ActionType = ReturnType<typeof AddPostActionCreator> | ReturnType<typeof UpdateNewMessageActionCreator> | ReturnType<typeof AddMessageActionCreator> | ReturnType<typeof UpdateNewPostActionCreator>;

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _onChange: () => void
    subscribe: (callback: () => void) => void
    _addPost: () => void
    _updateNewMessageText: (newText: string) => void
    _addMessage: () => void
    _updateNewPostText: (newText: string) => void
    dispatch: (action: ActionType) => void
}

export const store: StoreType = {
    _state: {
        dialogsPage: {
            dialogsData: [
                {
                    id: 1,
                    name: 'Lewis',
                    picture: 'https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1390x798:1392x796)/origin-imgresizer.eurosport.com/2020/06/01/2826749-58300008-2560-1440.jpg'
                },
                {
                    id: 2,
                    name: 'Valtteri',
                    picture: 'https://sun9-21.userapi.com/Wj79trhX7JToTycCwPG_CYZSQd1JwAzrdl5G1Q/GIcWEc2zRNg.jpg'
                },
                {
                    id: 3,
                    name: 'Max',
                    picture: 'https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/a3/7f/6adfbd96bf588fe6288aca94715e78f65da1d4d07ec09338177982.jpg'
                },
                {
                    id: 4,
                    name: 'Sergio',
                    picture: 'https://www.mexicanist.com/_files/200005550-0f0b40f0b7/450/Sergio%20Perez.jpg'
                },
                {
                    id: 5,
                    name: 'Daniel',
                    picture: 'https://media-cdn.mclaren.com/media/images/articles/hero/DR_x_3_web.jpg'
                },
                {
                    id: 6,
                    name: 'Carlos',
                    picture: 'https://images2.gazzettaobjects.it/methode_image/2021/03/22/Motori/Foto_Motori_-_Trattate/e3fe2efa4317707d10bb7bfa84eb3c6d_1200x675.jpg?v=202103221647'
                }
            ],
            messagesData: [
                {id: 1, message: 'Hi losers'},
                {id: 2, message: 'Your majesty'},
                {id: 3, message: 'Track limits?'},
                {id: 4, message: 'Stop!'},
                {id: 5, message: 'Hahahaha'},
                {id: 6, message: 'Ferrari'}
            ],
            newMessageText: ''
        },
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi, how are you', likeCount: 10},
                {id: 2, message: 'It\'s my first post', likeCount: 15},
                {id: 3, message: 'Oops', likeCount: 30},
                {id: 4, message: 'Blablabla', likeCount: 1}
            ],
            newPostText: ''
        }
    },
    getState() {
        return this._state
    },
    _onChange() {

    },
    subscribe(callback) {
        this._onChange = callback;
    },
    _addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCount: 0
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._onChange();
    },
    _updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._onChange();
    },
    _addMessage() {
        let newMessage = {
            id: 7,
            message: this._state.dialogsPage.newMessageText
        };
        this._state.dialogsPage.messagesData.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._onChange();
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._onChange();
    },
    dispatch(action) {
        switch (action.type) {
            case 'ADD-POST':
                this._addPost();
                break;
            case 'UPDATE-NEW-MESSAGE-TEXT':
                this._updateNewMessageText(action.newText);
                break;
            case 'ADD-MESSAGE':
                this._addMessage();
                break;
            case 'UPDATE-NEW-POST-TEXT':
                this._updateNewPostText(action.newText);
                break;
        }
    }
}

export const AddPostActionCreator = () => {
    return {type: 'ADD-POST'} as const
}
export const UpdateNewMessageActionCreator = (text: string) => {
    return {type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text} as const
}
export const AddMessageActionCreator = () => {
    return {type: 'ADD-MESSAGE'} as const
}
export const UpdateNewPostActionCreator = (text: string) => {
    return {type: 'UPDATE-NEW-POST-TEXT', newText: text} as const
}