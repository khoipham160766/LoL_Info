import React, { Fragment } from "react";
import Tooltip from "antd/lib/tooltip";

const InfoItem = props =>{
    const dataItem=props.dataItem;
    const listItem=props.listItem;
    const tooltip_into_item = (nameItem) =>{
        return (
        listItem.map(name=>(
            (name[0] === nameItem)?name[1].name:null
    
        ))
        )
    };
    return(
        <Fragment>
            <div className={`${props.hiddenInfo?"info-item-active":"info-item"} float-left inline-block max-w-[500px] 
                                        border-solid border-yellow-400 border-2 
                                        cursor-pointer bg-slate-900 pl-3 pr-3`} 
            >
                <h1 className="description text-blue-400 w-full mt-1 text-[17px] font-bold">Miêu tả:</h1>
                <div className="description-content text-white" dangerouslySetInnerHTML={{__html: dataItem.plaintext }}></div>
                <h1 className="properties text-blue-400 w-full mt-1 text-[17px] font-bold">Cộng thêm:</h1>
                <div className="properties-content text-white" dangerouslySetInnerHTML={{__html: dataItem.description }}></div>
                {
                    (!dataItem.into)?""
                    :
                    (
                        <div className="into-item">
                            <h1 className="properties text-blue-400 w-full mt-1 text-[17px] font-bold">Có thể nâng cấp thành:</h1>
                            {
                                listItem.map(item=>(
                                    (item[1].name === dataItem.name)?
                                    item[1].into.map((info,index)=>(
                                        <Tooltip placement="bottom" title={tooltip_into_item(info)} key={index}>
                                            <img src={`http://ddragon.leagueoflegends.com/cdn/12.15.1/img/item/${info}.png`} 
                                                alt={index}
                                                className="w-[50px] justify-center inline-block m-3"
                                            />
                                        </Tooltip>
                                    ))
                                    :
                                    null
                                ))
                            }
                        </div>
                    )
                }
                                {
                    (!dataItem.from)?""
                    :
                    (
                        <div className="into-item">
                            <h1 className="properties text-blue-400 w-full mt-1 text-[17px] font-bold">Trang bị thành phần:</h1>
                            {
                                listItem.map(item=>(
                                    (item[1].name === dataItem.name)?
                                    item[1].from.map((info,index)=>(
                                        <Tooltip placement="bottom" title={tooltip_into_item(info)} key={index}>
                                            <img src={`http://ddragon.leagueoflegends.com/cdn/12.15.1/img/item/${info}.png`} 
                                                alt={index}
                                                className="w-[50px] justify-center inline-block m-3"
                                            />
                                        </Tooltip>
                                    ))
                                    :
                                    null
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </Fragment>
    )
}

export default InfoItem;