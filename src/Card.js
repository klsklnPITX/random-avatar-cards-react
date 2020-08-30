import React from "react";

const Card = ({ id, name, email }) => {
    return (
        <div className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://avatars.dicebear.com/api/avataaars/${id}.svg?mood[]=happy`} alt="Avatar" width="200" height="200" />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default Card;