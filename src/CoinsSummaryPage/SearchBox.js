
import React from 'react';
import "./SearchBox.css"
const SearchBox = (props)=>{
    return (
        
        <div className='input-group'>
         <input 
            className="inputBox"
             placeholder="Find your coins..." 
             type="text" 
             onChange={(e)=>props.setSearch(e.target.value)}
             style= {{color: 'blue'}}
         /> 
        </div>

    )}

export default SearchBox;

