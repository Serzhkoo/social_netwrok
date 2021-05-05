let onChange = () => {

}

export const subscribe = (callback: () => void) => {
    onChange = callback;
}

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

export const state: StateType = {
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
            {id: 5, name: 'Daniel', picture: 'https://media-cdn.mclaren.com/media/images/articles/hero/DR_x_3_web.jpg'},
            {
                id: 6,
                name: 'Carlos',
                picture: 'https://images2.gazzettaobjects.it/methode_image/2021/03/22/Motori/Foto_Motori_-_Trattate/e3fe2efa4317707d10bb7bfa84eb3c6d_1200x675.jpg?v=202103221647'
            }
        ],
        messagesData: [
            {id: 1, message: 'Hi loosers'},
            {id: 2, message: 'Your majesty'},
            {id: 3, message: 'Fucking mercedes'},
            {id: 4, message: 'Ya dibil'},
            {id: 5, message: 'Hahahaha'},
            {id: 6, message: 'Ferrari'}
        ],
        newMessageText: ''
    },
    profilePage: {
        postsData: [
            {id: 1, message: 'Hi, how are you', likeCount: 10},
            {id: 2, message: 'It\'s my first post', likeCount: 15},
            {id: 3, message: 'Pups', likeCount: 30},
            {id: 4, message: 'Blablabla', likeCount: 1}
        ],
        newPostText: ''
    }
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCount: 0
    };
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    onChange();
}

export let updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    onChange();
}

export let addMessage = () => {
    let newMessage = {
        id: 7,
        message: state.dialogsPage.newMessageText
    };
    state.dialogsPage.messagesData.push(newMessage);
    state.dialogsPage.newMessageText = '';
    onChange();
}

export let updateNewMessageText = (newText: string) => {
    state.dialogsPage.newMessageText = newText;
    onChange();
}