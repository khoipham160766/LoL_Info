import React, { Fragment } from "react";
import Tooltip from "antd/lib/tooltip";

const InfoItem = props =>{
    const tooltip_into_item = (name) =>{
        return props.listItem[name].name;
    };
    return(
        <Fragment>
            <div className="float-left h-[550px] inline-block w-[400px] 
                                        border-solid border-yellow-400 border-2 
                                        m-[26px] cursor-pointer bg-slate-900 pl-3" 
            >
                <h1 className="description text-blue-400 w-full mt-1 text-[17px] font-bold">Miêu tả:</h1>
                <div className="description-content text-white" dangerouslySetInnerHTML={{__html: props.dataItem.plaintext }}></div>
                <h1 className="properties text-blue-400 w-full mt-1 text-[17px] font-bold">Cộng thêm:</h1>
                <div className="properties-content text-white" dangerouslySetInnerHTML={{__html: props.dataItem.description }}></div>
                {
                    (!props.dataItem.into)?""
                    :
                    (
                        <div className="into-item">
                            <h1 className="properties text-blue-400 w-full mt-1 text-[17px] font-bold">Có thể nâng cấp thành:</h1>
                            {
                                props.dataItem.into.map((into,index)=>(
                                    <Tooltip placement="bottom" title={tooltip_into_item(into)} key={index}>
                                        <img src={`http://ddragon.leagueoflegends.com/cdn/12.15.1/img/item/${into}.png`} 
                                            alt={index}
                                            className="w-[50px] justify-center inline-block m-3"
                                        />
                                    </Tooltip>
                                ))
                            }
                        </div>
                    )
                }
                {
                    (!props.dataItem.from)?""
                    :
                    (
                        <div className="into-item">
                            <h1 className="properties text-blue-400 w-full mt-1 text-[17px] font-bold">Trang bị thành phần:</h1>
                            {
                                props.dataItem.from.map((into,index)=>(
                                    <Tooltip placement="bottom" title={tooltip_into_item(into)} key={index}>
                                        <img src={`http://ddragon.leagueoflegends.com/cdn/12.15.1/img/item/${into}.png`} 
                                            alt={index}
                                            className="w-[50px] justify-center inline-block m-3"
                                        />
                                    </Tooltip>
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