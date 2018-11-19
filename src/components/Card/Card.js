import React from "react";
import "./Card.css"

const Card = (props) => {
    return(
        <div className="card">
        <img width="75" src={props.avatar_url} alt="User-Pic" />
        <div className="info">
            <div className="info-title">
            {props.name}
            </div>
            <div>
                {props.company}
            </div>
        </div>

        </div>
    )
}

export default Card;