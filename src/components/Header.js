import React, { Fragment } from "react";

const Header = () => {
    return(
        <Fragment>
            <div className="h-20 bg-slate-900">
                <div className="w-[40px] inline-block m-4">
                    <img src="./images/LoL_icon.png" className="w-full" alt="logo"/>
                </div>
                <div className="w-[120px] inline-block m-4 ml-0">
                    <img src="./images/title_game.png"  className="w-full" alt="title"/>
                </div>
            </div>
        </Fragment>
    )
}

export default Header;