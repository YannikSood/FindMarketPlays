const express = require("express"),
  app = express(),
  cors = require("cors");

const fetch = require("node-fetch");

var path = require('path');

app.use(cors());
app.listen(process.env.PORT || 3000);
// app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.send({ message: "Server Connected" });
});


app.get("/optionsAPI/:ticker", async (req, res) => {
        var tempJSON = [];
        const searchString = `${req.params.ticker}`;
        const url = `https://api.benzinga.com/api/v1/signal/option_activity?page=1&parameters%5Btickers%5D=${searchString}&token=bd2570cf59734eb9934b3cd886ce958b`;

        await fetch(url, { headers: { Accept: 'application/json' } })
        .then(res => res.json()
        .then((json) => {
            
            tempJSON = json;
            // console.log(tempJSON);
        }))
        .catch(err => console.error(err)); // eslint-disable-line
        
        
        res.send({ message: tempJSON });
});

app.get("/newsAPI/:ticker", async (req, res) => {
    var tempJSON = [];
    const searchString = `${req.params.ticker}`;
    const url = `https://api.benzinga.com/api/v2/news?pageSize=50&page=0&displayOutput=headline&sort=created%3Adesc&tickers=${searchString}&token=bd2570cf59734eb9934b3cd886ce958b`;

    await fetch(url, { headers: { Accept: 'application/json' } })
    .then(res => res.json()
    .then((json) => {
        
        tempJSON = json;
        // console.log(tempJSON);
    }))
    .catch(err => console.error(err)); // eslint-disable-line
    
    
    res.send({ message: tempJSON });
});

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

