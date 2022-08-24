import React, { Fragment } from "react";

const Spell = props =>{
    const dataSpell = props.dataSpell;
    return(
        <Fragment>
            <div className="item float-left m-[26px] pr-0 pb-1">
                <div className="float-left inline-block w-[250px] border-solid border-slate-400 border-2 cursor-pointer h-[250px]">
                    <img src={`http://ddragon.leagueoflegends.com/cdn/12.15.1/img/spell/${dataSpell[1].id}.png`} 
                        className="float-left w-[60px] m-3 border-solid border-slate-600 border-2 "
                        alt={dataSpell[1].id}
                    />
                    <div className="w-[155px] float-left mt-3 text-white text-[16px]">
                        <p className="text-blue-400">{dataSpell[1].name}</p>
                        <p className="text-[14px]">{dataSpell[1].description}</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Spell;