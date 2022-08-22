import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import '../App.css';

const InfoChamp = () => {
    const location = useLocation();
    const  datachamp  = location.state;
    const skill = ["Q", "W", "E", "R"];
    console.log(datachamp);

    return(
        <Fragment>
            <div className="App h-full">
                <div className="w-full h-full bg-slate-800 float-left">
                    <div className="w-full float-left info-champ">
                        <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${datachamp.id}_0.jpg`} 
                             alt={datachamp.id}
                             className="mt-7 ml-[100px] float-left"
                        />
                        <div className="info w-[65%] mt-7 ml-[50px] bg-info-champ float-left border-double border-red-600 border-4">
                            <h3 className="ml-[5%] w-[90%] text-white text-4xl text-center p-2 border-b-4 border-b-red-600">{datachamp.id}<p className="text-2xl">( {datachamp.title} )</p></h3>
                            <div className="w-[90%] ml-[5%] float-left border-b-4 border-b-red-600 p-5">
                                <div className="w-full pt-2 float-left">
                                    <img src={`http://ddragon.leagueoflegends.com/cdn/12.15.1/img/passive/${datachamp.passive.image.full}`} 
                                        alt={datachamp.id}
                                        className="float-left"
                                    />
                                    <div className="float-left w-[80%]">
                                        <p className="w-full ml-4 float-left text-white text-xl">( Nội tại ) {datachamp.passive.name}</p>
                                        <div className="ml-4 text-white float-left" dangerouslySetInnerHTML={{__html: datachamp.passive.description}}></div>
                                    </div>
                                </div>
                                {
                                    datachamp.spells.map((spell, index) => (
                                        <div className="w-full pt-5 float-left" key={index}>
                                            <div className="float-left">
                                                <img src={`https://ddragon.leagueoflegends.com/cdn/12.15.1/img/spell/${spell.image.full}`} 
                                                    alt={datachamp.id}
                                                    className="float-left mt-1"
                                                />
                                            </div>
                                            <div className="float-left w-[80%]">
                                                <p className="w-full ml-4 float-left text-white text-xl">( {skill[index]} ) {spell.name}</p>
                                                <p className="ml-4 text-white float-left">{spell.description}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="champ-description float-left w-[90%] ml-[5%] pt-3 pb-3">
                                <p className="text-white">{datachamp.lore}</p>
                            </div>
                        </div>
                    </div>
                    <div className="skin w-[90%] ml-[5%] float-left mt-7">
                        <h3 className="w-full text-white text-center text-3xl border-b-4 border-b-white mb-5 pb-3">TRANG PHỤC</h3>
                        <div className="w-full float-left ml-4">
                            {
                                datachamp.skins.map((skin,index) => (
                                    <div className="inline-block mr-8 mb-7" key={index}>
                                        <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${datachamp.id}_${skin.num}.jpg`} 
                                             alt={index}
                                        />
                                        <div className="float-left w-[308px] bg-black">
                                            <h1 className="text-white text-center pt-5 pb-5 text-xl ">{(skin.name==="default")?datachamp.id:skin.name}</h1>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default InfoChamp;