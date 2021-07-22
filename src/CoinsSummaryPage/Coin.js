import React from 'react'
import { Link} from 'react-router-dom'

import "./Coins.css"
import AddFavourite from './AddFavourite'



const Coin = ({coin, handleClick}) =>{

    const priceChange = coin.price_change_percentage_24h;
    return(
        
                <div className="crytoCoin" >
                    <div>
                        <Link to={`/coins/${coin.id}`}  className="details" >Details</Link>
                    </div>
                    <img className="coinLogo" src={coin.image} alt={`${coin.name}`} />
                    <div className="coinNameWrap">
                        <h1 className="coinName">{coin.name}</h1>
                        <p className="coinSymbol">{coin.symbol.toUpperCase()}</p>
                    </div>
                    <p className="coinPrice">${coin.current_price.toLocaleString()}</p>
                    {/* <p className="coinMarketcap">Market Cap: ${marketcap.toLocaleString()}</p> */}
                    {priceChange <0 ? (
                    <div className="priceContainerDOWN">
                        <p className="priceChange">{Number(priceChange).toFixed(2)}%</p>
                        <span className='coinDown'></span>
                    </div>
                    ) :(
                    <div className="priceContainerUP">
                        <p className="priceChange">{Number(priceChange).toFixed(2)}%</p>
                        <span className="coinUp"></span> 
                   </div>
                    )}
                   
                    <AddFavourite coin={coin} handleClick={handleClick}  />
                    
                </div> 
                
    )
}

export default Coin