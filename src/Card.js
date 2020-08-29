import React from "react";

const Card = () => {
    return (
        <div className="bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src="https://avatars.dicebear.com/api/avataaars/1.svg?mood[]=happy" alt="Avatar" width="200" height="200" />
            <h2>Hans Peter</h2>
            <p>hans.peter@gmail.com</p>
        </div>
    );
}

export default Card;