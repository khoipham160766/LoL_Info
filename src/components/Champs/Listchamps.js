import React, { Fragment } from "react";
import Cartchamp from "./Cartchamp";

const Listchamps = props => {
    const listChamp = props.listChamp;
    return (
        <Fragment>
            {
                (listChamp.length === 0)?
                <h1 className="text-white float-left text-2xl text-center ml-[50px]">KHÔNG TÌM THẤY KẾT QUẢ.</h1>
                :
                <div className="float-left">
                    {
                        listChamp.map((champ,index) => (
                            <Cartchamp id={champ.id} key={index} datachamp={champ} />
                        ))
                    }
                </div>
            }
        </Fragment>
    )
}

export default Listchamps;