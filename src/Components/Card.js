import React from "react";

const Card = ({id, fullName, image}) =>{
    return(
        <div className="dib br3 pa3 ma2 grow bw2">
            <img src={image} alt={fullName}/>
            <div className="tc">
                <p>{id}</p>
                <h2>{fullName}</h2>
            </div>
        </div>
    )
}

export default Card;