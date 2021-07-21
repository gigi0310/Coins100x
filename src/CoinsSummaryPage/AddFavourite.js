import React from 'react';

const AddFavourite = ({handleClick, coin})=>{
    return(
        <>
            <span className='' onClick={() => handleClick(coin)} style={{cursor: "pointer"}}>Add   /   Remove</span>
            
        </>
    )
}

export default AddFavourite