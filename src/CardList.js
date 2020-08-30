import React from "react"
import Card from "./Card"


const CardList = ({ avatar }) => {
    return (
        <div>
            {
                avatar.map((user, i) => {
                    return (
                        <Card
                            key={i}
                            id={avatar[i].id}
                            name={avatar[i].name}
                            email={avatar[i].email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList