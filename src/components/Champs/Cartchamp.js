import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Cartchamp = props => {
    const { id , datachamp } = props;
    const img =`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_0.jpg`;
    return(
        <Fragment>
            <div className="w-[245px] h-[460px] mt-2 ml-12 mb-5 inline-block">
                <Link to={`/championinfo/${id}`} state={datachamp}>
                    <img src={img} alt={id}/>
                    <div className="w-[245px] h-[60px] bg-name -mt-[62px] z-10 absolute">
                        <h1 className="text-white text-center m-auto text-xl mt-4">{id}</h1>
                    </div>
                </Link>
            </div>
        </Fragment>
    )
}
export default Cartchamp;