import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Item from "../components/Items/Item";
import Search from "antd/lib/input/Search";

const Items = () => {
    const [Items, setItems] = useState([]);
    const [Seacrh, setSearch] = useState([]);
    const [Check, setCheck] = useState(false);
    useEffect(()=>{
        getItems();
    },[]);
    const getItems = async() =>{
        const response = await axios.get("https://ddragon.leagueoflegends.com/cdn/12.15.1/data/vn_VN/item.json");
        setItems(Object.entries(response.data.data));
    }
     console.log(Items);
    // console.log(ItemID);
    //search item
    const handleSearch = (e) =>{
        setCheck(true);
        const searchItem = [];
        Items.map(id =>(
            ((id[1].name.toUpperCase()).includes(e.target.value.toUpperCase()))?searchItem.push(id):null
        ))
        setSearch(searchItem);
    }
    return(
        <Fragment>
            <div className="App float-left m-h-[150%]">
                <div className="bg-slate-800 float-left w-full">
                    <Search placeholder="Nhập tên trang bị..."  
                            className="w-[380px] float-left p-4 pl-[30px]" 
                            onChange={handleSearch}
                    />
                </div>
                <div className="w-full h-full bg-slate-800 float-left">
                  {
                    (Seacrh.length === 0 && Check)?
                        <h1 className="text-white float-left text-2xl text-center ml-[30px]">KHÔNG TÌM THẤY KẾT QUẢ.</h1>
                    :
                    ((Check)?Seacrh:Items).map(id=>(
                        (id[1].description === "")?
                        ""
                        :
                        <Item dataItem={id}
                              listItem={Items}
                              listItemSearch={Seacrh}
                              check={Check}
                              key={id[0]} 
                        />
                    ))
                  }
                </div>
            </div>
        </Fragment>
    )
}

export default Items;