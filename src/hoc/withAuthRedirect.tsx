import {Redirect} from "react-router-dom";
import React, {ComponentType} from "react";
import {StateType} from "../redux/redux-store";
import {connect} from "react-redux";

type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToPropsForRedirect = (state: StateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth
})

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStatePropsType) => {
        const {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={'/login'}/>
        return <Component {...restProps as T}/>
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}