import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Item from "../components/Item";

const Items = () => {
    const [Items, setItems] = useState([]);
    const [ItemID, setItemID] = useState([]);
    useEffect(()=>{
        getItems();
        getItemID();
    },[]);
    const getItems = async() =>{
        const response = await axios.get("https://ddragon.leagueoflegends.com/cdn/12.15.1/data/vn_VN/item.json");
        setItems(response.data.data);
    }
    const getItemID = async() => {
        const response = await axios.get("https://ddragon.leagueoflegends.com/cdn/12.15.1/data/vn_VN/item.json");
        setItemID(Object.keys(response.data.data));
    }
    console.log(Items);
    console.log(ItemID);
    return(
        <Fragment>
            <div className="App h-full">
                <div className="w-full h-full bg-slate-800 float-left">
                  {
                    ItemID.map(id=>(
                        (Items[id].description === "")?
                        ""
                        :
                        <Item dataItem={Items[id]} 
                              listItem={Items}
                              key={id} 
                        />
                    ))
                  }
                </div>
            </div>
        </Fragment>
    )
}

export default Items;