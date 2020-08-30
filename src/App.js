import React from "react"
import CardList from "./CardList"
import { avatar } from "./avatar"
import SearchBox from "./SearchBox"


const App = () => {
    return (
        <div className="tc">
            <h1>Avatars</h1>
            <SearchBox />
            <CardList avatar={avatar} />
        </div>
    );
}

export default App;