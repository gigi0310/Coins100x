import React from 'react';

const AddFavourite = ({handleClick, coin})=>{
    return(
        <>
            <p className='' onClick={() => handleClick(coin)} style={{cursor: "pointer"}}>
                <span className="plus">+</span>    
                <span className="minus">-</span>
            </p>
            
        </>
    )
}

export default AddFavourite