import React, { ComponentType } from 'react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { HashRouter, Route, RouteComponentProps, withRouter } from 'react-router-dom';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import { News } from './components/News/News';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import { Login } from './components/Login/Login';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import { StateType, store } from './redux/redux-store';
import { Preloader } from './components/common/Preloader';
import { withSuspense } from './hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

type PropsType = {
  initializeApp: () => void
  isInitialized: boolean
}
type AppPropsType = RouteComponentProps & PropsType

class App extends React.Component<AppPropsType> {
  componentDidMount(): void {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.isInitialized) {
      return <Preloader/>;
    }

    return (
      <div className="App">
        <HeaderContainer/>
        <Navbar/>
        <div className="App-content">
          <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
          <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
          <Route path='/users' render={() => <UsersContainer/>}/>
          <Route path='/news' render={() => <News/>}/>
          <Route path='/music' render={() => <Music/>}/>
          <Route path='/settings' render={() => <Settings/>}/>
          <Route path='/login' render={() => <Login/>}/>
        </div>
      </div>
    );
  }
}

type MapStateToPropsType = {
  isInitialized: boolean
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
  return {
    isInitialized: state.app.isInitialized
  };
};

const AppContainer = compose<ComponentType>(connect(mapStateToProps, { initializeApp }), withRouter)(App);

export const SocialNetworkApp = () => {

  return (
    <React.StrictMode>
      <HashRouter>
        <Provider store={store}>
          <AppContainer/>
        </Provider>
      </HashRouter>
    </React.StrictMode>
  );
};
