import React, { Fragment } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = props =>{
    return(
        <Fragment>
            <div className="bg-slate-800 float-left w-full">
                <div className="search w-full float-left">
                    <input type="text" 
                            onChange={props.handleSearchInput}
                            className="float-left outline-0 h-[35px] w-[350px] p-[10px] m-[30px] mr-0"
                    />
                    <button type="submit" 
                            className="float-left h-[35px] w-[35px] p-[10px] 
                                        m-[30px] ml-0 bg-slate-300 hover:bg-black hover:text-white"
                            onClick={props.handleSumbit}
                    >
                        <FontAwesomeIcon icon={faSearch} className="float-left" />
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default Search;