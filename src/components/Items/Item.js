import React, { Fragment, useState } from "react";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InfoItem from "./InfoItem";

const Item = props =>{
    const [Info, setInfo] = useState(false)
    const dataItem = props.dataItem;
    const setHidden = () =>{
        setInfo(!Info);
    }
    return(
        <Fragment>
            <div className="item float-left m-[26px]" onClick={setHidden}>
                <div className="float-left inline-block w-[250px] border-solid border-slate-400 border-2 cursor-pointer">
                    <img src={`http://ddragon.leagueoflegends.com/cdn/12.15.1/img/item/${dataItem[1].image.full}`} 
                        className="float-left w-[60px] m-3 border-solid border-slate-600 border-2 "
                        alt={dataItem[1].name}
                    />
                    <div className="w-[155px] float-left mt-3 text-white text-[16px]">
                        <div className="w-full" dangerouslySetInnerHTML={{__html: dataItem[1].name}}></div>
                        <div className="float-left text-yellow-400" dangerouslySetInnerHTML={{__html: dataItem[1].gold.total}}></div>
                        <p className="float-left ml-3 mt-[2px] text-yellow-400 text-[14px]"><FontAwesomeIcon icon={faCoins} /></p>
                    </div>
                </div>
                <InfoItem dataItem={dataItem[1]} listItem={props.listItem} hiddenInfo={Info}/>
            </div>
        </Fragment>
    )
}

export default Item;