import React from 'react'

class SearchBar extends React.Component {
    state = {searchTerm: ''};

    onSearchTermSubmit = event => {
        event.preventDefault();
        // To make a call back from the parent API
        this.props.onFormSubmit(this.state.searchTerm);
    }

    onInputChange = event => {
        this.setState({searchTerm: event.target.value})
    }

    render() {
        return(
            <div className="ui segment">
                <form className="search-bar ui form" onSubmit={this.onSearchTermSubmit}>
                    <div className="field">
                        <label> YouTube Search </label>
                        <input type="text"
                               placeholder="Search..."
                               value={this.state.searchTerm}
                               onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;