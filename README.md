
# Coin100x

## App Deployment

Visit the App here - [Coin100x](https://coin100x.herokuapp.com/), or you can also find the GitHub repo - [GitHub](https://github.com/gigi0310/Coins10x)

## App Description

This App provides real-time prices, market cap, volume, charts and market-related data.


## App Features

* Fetching real-time data from coinGecko API
* Createing a card-style layout for each crytocurrency with routing for more market-data related details
* Adding and removeing the favourites from profile section
* Searching coins with fuzzy search
* Adding muliple time segments (1 day, 1 week and 1 year) for users to look at historical pricing for each currency
* Retrieving from local storage on load


## App View

### Homepage/Landing Page

![picture](/App Home page.png)

### Crytocurrency Dashboard

![picture](/App Dashboard.png)


## Technologies Used

* React: Hooks (useState, useEffect, useParams, useRef)
* React: Router
* Javascript
* Chart.js
* Loadash
* Local storage
* Axios
* HTML5
* CSS3
* Bootstrap
* Heroku
* Git
* GitHub

## Issues

- [coinGecko Api](https://www.coingecko.com/api/documentations/v3) has missing data in total supply and market cap for specific coins. When fetching data from API, it will return undifined value, which makes the coin detais cannot render in the browser. In order to fix this issue, I put the if statement to control it.

- In the project, the chart.js is v2, as have confige issue when using v3


## Challenges

- Utilise the React Hooks into the project
- Adding coins to favourites, at the same time, removing coins from coins pool. 
- Removing favourites coin, and adding back to the coins pool.
- Adding muliple time segments (1 day, 1 week and 1 year) for users to look at historical pricing for each currency


## Future Improvements

- Add back-end for user authentication, user profile
- Add cool features, like drag and drop coin card to the favourite section
- Add filters, which can explore coins by category, exchange rate, price
- Update the chart.js v2 to v3


### How to Install Coin100x

- Fork and Clone this repository
- In the directory, run npm install