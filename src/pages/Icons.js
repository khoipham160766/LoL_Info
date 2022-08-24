import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Icon from "../components/Icons/Icon";

const Icons = () =>{
    const [Icons, setIcons] = useState([]);
    useEffect(()=>{
        getIcons();
    },[]);
    const getIcons = async() =>{
        const response = await axios.get("https://ddragon.leagueoflegends.com/cdn/12.15.1/data/vn_VN/profileicon.json");
        setIcons(Object.entries(response.data.data));
    }
    // console.log(Icons);
    return(
        <Fragment>
            <div className="App float-left m-h-[150%]">
                <div className="w-full h-full bg-slate-800 float-left">
                  {
                    Icons.map((icon, index)=>(
                        <Icon dataIcon={icon} key={index} />
                    ))
                  }
                </div>
            </div>
        </Fragment>
    )
}

export default Icons;