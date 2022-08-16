import React, { Fragment } from "react";
import Cartchamp from "./Cartchamp";

const Listchamps = props => {
    const listChamp = props.listChamp;
    return (
        <Fragment>
            <div className="float-left">
                {
                    listChamp.map((champ,index) => (
                        <Cartchamp id={champ.id} key={index} />
                    ))
                }
            </div>
        </Fragment>
    )
}

export default Listchamps;