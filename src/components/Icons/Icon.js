import React, { Fragment } from "react";

const Icon = props =>{
    const dataIcon = props.dataIcon;
    return(
        <Fragment>
            <div className="float-left m-3 ml-[14px] border-solid border-gray-400 border-2">
                <img src={`http://ddragon.leagueoflegends.com/cdn/12.15.1/img/profileicon/${dataIcon[1].image.full}`} 
                     alt={dataIcon[0]}
                     className="float-left w-[70px]"
                />
            </div>
        </Fragment>
    )
}

export default Icon;