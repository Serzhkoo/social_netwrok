import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state, addPost, updateNewPostText, addMessage, updateNewMessageText, subscribe} from "./redux/state";

export let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 addMessage={addMessage}
                 updateNewMessageText={updateNewMessageText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree()
subscribe(rerenderEntireTree);

