import React from "react";


class SearchBar extends React.Component {
    render(){
        return(
            <div className="SearchBar">
                <input placeholder="Search" 
                style={
                {borderColor: 'grey'}
                
                    }/>
                <button className="Searchbutton">Search</button>
            </div>
        )
    }
}

export default SearchBar;