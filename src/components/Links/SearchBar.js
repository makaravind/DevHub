import React, {Component} from 'react';

class SearchBar extends Component{

    constructor(props){
        super(props)

    }


    render(){
        return (
            <div>
                <input type="text" className="form-control m-3" aria-label="Small"
                       aria-describedby="inputGroup-sizing-sm"
                       name='inputText' placeholder="Search By Tags"
                       onChange={(e) => this.props.onSearch(e.target.value)}/>
            </div>
        )
    }
}


export default SearchBar;