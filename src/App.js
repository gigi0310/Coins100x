import axios from "axios";
import React, {useEffect, useState} from "react";
import {pullAllWith} from "lodash";
import "./App.css";
import CoinsSummaryPage from "./CoinsSummaryPage"
import CoinDetailsPage from "./CoinDetailsPage"

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


function App() {
    // load favours from localstorage
    const loadedFavouritesCoins = localStorage.getItem('favouriteCoins');

    const [state, setState] = useState({
        coins: [],
        favouriteCoins:loadedFavouritesCoins === null ? []:JSON.parse(loadedFavouritesCoins)// conver Json into javascript
    });
      

    const addFavouriteCoin = (coin) => {
        state.favouriteCoins.unshift(coin);

        localStorage.setItem('favouriteCoins', JSON.stringify(state.favouriteCoins));

        setState({
            favouriteCoins: state.favouriteCoins,
            coins:state.coins.filter(item => item.id !== coin.id)
        })

    };

    const removeFavouriteCoin = (coin) => {
        state.coins.unshift(coin)

        const favouriteCoins = state.favouriteCoins.filter(item => item.id !== coin.id);
        localStorage.setItem('favouriteCoins', JSON.stringify(favouriteCoins))

        setState({
            favouriteCoins: favouriteCoins,
            coins:state.coins
        })
    };
     
    useEffect(() => {

        const fetchDate = async()=>{
            await axios
            .get(
                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=1&sparkline=false"
            )
            .then((res) => {

                // make favourite coins data update to date. 
                const favouriteCoins = state.favouriteCoins.map(favour => {
                    const updatedFavour = res.data.find(coin => favour.id === coin.id);
                    if (updatedFavour) {
                        return updatedFavour
                    }
                    return favour
                })
                // filter unfavourite coins
                const unSelectedCoins = pullAllWith(res.data, favouriteCoins, (item1, item2) => item1.id === item2.id);
                // save to localstorage against to avoid lost latest favour data.
                localStorage.setItem('favouriteCoins', JSON.stringify(favouriteCoins)); //
                setState({
                    coins:unSelectedCoins,
                    favouriteCoins,
                });

            })
            .catch((error) => console.error(error));
        }
        
        setInterval(()=>{
            console.log("refresh");
            fetchDate();
        }, 300000)
        fetchDate();
    },[setState]);

    return (
        <Router>
            <Switch>
                <Route exact path="/" >
                    <CoinsSummaryPage coins={state.coins} favouriteCoins={state.favouriteCoins} addFavouriteCoin={addFavouriteCoin} removeFavouriteCoin={removeFavouriteCoin} />
                </Route>
                <Route path="/coins/:id" >
                    <CoinDetailsPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;