import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom"
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {News} from './components/News/News';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";

function App() {
    return (
            <div className="App">
                <Header/>
                <Navbar/>
                <div    className="App-content">
                    <Route path='/dialogs' render={() => <DialogsContainer />}/>
                    <Route path='/profile' render={() => <Profile />}/>
                    <Route path='/users' render={() => <UsersContainer />}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
    );
}

export default App;