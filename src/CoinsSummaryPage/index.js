import React, {useState} from "react";
import Coin from "./Coin";
import Header from './Header';
import SearchBox from "./SearchBox";
import './Coins.css'

export default function CoinSummaryPage({coins, favouriteCoins, addFavouriteCoin, removeFavouriteCoin}) {

    const [search, setSearch] = useState("");
    if (!coins){
        coins = []
    }
    const filteredCoins = coins.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );

    if (!favouriteCoins) {
        favouriteCoins = [];
    }

    return (
        
    <div className="container-fluid coinlist">
        <div className="dashName">
            <Header  heading="Coins10x"/>
        </div> 
        
            
            
            <div className="coinsContainer">
                {favouriteCoins.map((coin) => {
                    return (
                        <Coin coin={coin}
                              key={coin.id + "@"}
                              handleClick={removeFavouriteCoin}
                        />
                    );
                })}
            </div>
            <SearchBox search={search} setSearch={setSearch}/>
        

        <div className="coinsContainer">
            {filteredCoins.map((coin) => {
                return (
                    <Coin coin={coin}
                          handleClick={addFavouriteCoin} 
                          key={coin.id}
                    />
                );
            })}
        </div>
        
    </div>)
}
