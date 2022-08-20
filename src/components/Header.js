import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <Fragment>
            <div className="h-[83px] bg-slate-900">
                <Link to="/" className="float-left">
                    <div className="w-[40px] inline-block m-4">
                        <img src="../../images/LoL_icon.png" className="w-full" alt="logo"/>
                    </div>
                    <div className="w-[120px] inline-block m-4 ml-0">
                        <img src="../../images/title_game.png"  className="w-full" alt="title"/>
                    </div>
                </Link>
                <div className="inline-block">
                    <ul className="navbar list-none text-slate-400 text-[16px] mt-3 ml-9">
                        <li className="inline-block p-4 cursor-pointer"><Link to="/" className="hover:text-white">TƯỚNG</Link></li>
                        <li className="inline-block p-4 cursor-pointer"><Link to="/" className="hover:text-white">CHƯA BIẾT</Link></li>
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}

export default Header;