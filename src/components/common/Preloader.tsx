import loadingAnimation from "../../assets/images/loadingAnimation.svg";
import React from "react";

export function Preloader() {
    return (
        <div>
            <img src={loadingAnimation} alt=""/>
        </div>
    )
}