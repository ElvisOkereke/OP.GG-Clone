import './SearchBar.css';
import React, {useState} from 'react';



function SearchBar() {

    const [searchText, setSearchText] = useState("");

    return (

        
        <div className='searchBar'>
            <link rel = "stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"></link>
            
            <input 
            onChange={ e => setSearchText(e.target.value)}
            type = 'text'></input>

           

        </div>

        )
    }

    export default SearchBar;