import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {getAuth} from "../../redux/auth-reducer";

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
};

type HeaderContainerPropsType = MapStateToPropsType & {
    getAuth: () => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount(): void {
        this.props.getAuth();
    }

    render() {
        return (
            <Header isAuth={this.props.isAuth}
                    login={this.props.login}/>
        )
    }
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.data.login
    }
};

export default connect(mapStateToProps, {getAuth})(HeaderContainer);