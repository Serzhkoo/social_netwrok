import React from 'react';
import './App.css';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom"
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {News} from './components/News/News';
import {StateType} from './redux/state';

type AppPropsType = {
    state: StateType
    addPost: () => void
    updateNewPostText: (postMessage: string) => void
    addMessage: () => void
    updateNewMessageText: (newMessageText: string) => void
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <div className="App-content">
                    <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}
                                                                  addMessage={props.addMessage}
                                                                  updateNewMessageText={props.updateNewMessageText}/>}/>
                    <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}
                                                                  addPost={props.addPost}
                                                                  updateNewPostText={props.updateNewPostText}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
