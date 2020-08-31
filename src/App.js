import React, { Component } from "react"
import CardList from "./CardList"
import { avatar } from "./avatar"
import SearchBox from "./SearchBox"


class App extends Component {
    constructor() {
        super();
        this.state = {
            avatars: avatar,
            searchField: ""
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }

    render() {
        const filteredAvatars = this.state.avatars.filter(avatars => {
            return avatars.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        return (
            <div className="tc">
                <h1>Avatars</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList avatar={filteredAvatars} />
            </div>
        );
    }
}

export default App;