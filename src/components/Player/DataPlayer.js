import React, { Fragment } from "react";

const DataPlayer = props =>{
    console.log(props.dataPlayer);
    return(
        <Fragment>
            {
                (!props.dataPlayer.profileIconId)?
                <h1 className="text-white float-left text-2xl text-center ml-[30px]">KHÔNG TÌM THẤY KẾT QUẢ.</h1>
                :
                <div className="bg-slate-800 float-left w-full">
                    <div className="info-player float-left border-solid border-slate-400 border-2 p-5 w-[40%] ml-[30px]">
                        <img src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/profileicon/${props.dataPlayer.profileIconId}.png`} 
                            alt={props.dataPlayer.profileIconId}
                            className="float-left text-center w-[140px] ml-[23%]"
                        />
                        <h1 className="name text-white float-left w-full text-center mt-4 text-2xl">
                            {props.dataPlayer.name}
                        </h1>
                        <h1 className="name text-white float-left w-full text-center">Lv: {props.dataPlayer.summonerLevel}</h1>
                    </div>
                </div>
            }
        </Fragment>
    )
}

export default DataPlayer;