import React, { Fragment, useState } from "react";
import Search from "../components/Player/Search";
import DataPlayer from "../components/Player/DataPlayer";
import axios from "axios";

const SearchPlayer = () =>{
    const [NamePlayer, setNamePlayer] = useState();
    const [dataPlayer, setdataPlayer] = useState({});
    const API_KEY = "RGAPI-1588969e-388d-47bc-b5f4-85f5b16caf55";
    const handleSearchInput = e =>{
        setNamePlayer((e.target.value === "")?"empty":e.target.value);
    }
    const handleSumbit = () =>{
        // setup API
        const API_CALL = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${NamePlayer}?api_key=${API_KEY}`;
        console.log(API_CALL)
        // handle the api call
        axios.get(API_CALL).then(response => setdataPlayer(response.data));
    }
    return(
        <Fragment>
            <div className="App float-left m-h-[150%]">
                <Search handleSumbit={handleSumbit} handleSearchInput={handleSearchInput}/>
                {
                    (Object.keys(dataPlayer).length === 0)?
                    ""
                    :
                    <DataPlayer dataPlayer={dataPlayer}/>
                }
            </div>
        </Fragment>
    )
}

export default SearchPlayer;