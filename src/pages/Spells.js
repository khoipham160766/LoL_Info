import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Spell from "../components/Spells/Spell";

const Spells = () =>{
    const [Spells, setSpells] = useState([]);
    useEffect(()=>{
        getSpells();
    },[])
    const getSpells = async() =>{
        const response = await axios.get("http://ddragon.leagueoflegends.com/cdn/12.15.1/data/vn_VN/summoner.json");
        setSpells(Object.entries(response.data.data));
    }
    //console.log(Spells);
    return(
        <Fragment>
            <div className="App h-full">
                <div className="w-full h-full bg-slate-800 float-left">
                {
                    Spells.map((id,index)=>(
                        <Spell dataSpell={id} key={index}/>
                    ))
                }
                </div>
            </div>
        </Fragment>
    )
}

export default Spells;