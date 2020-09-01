const express = require("express"),
  app = express(),
  cors = require("cors");

const fetch = require("node-fetch");

const path = require('path');

app.use(cors());

// app.get('/', function (req, res) {
//   res.send('root')
// })

// app.get('/stock', function (req, res) {
//   res.send('stock')
// })

// app.get('/optionFeed', function (req, res) {
//   res.send('optionFeed')
// })

app.get("/optionsAPI/:ticker", async (req, res) => {
        var tempJSON = [];
        const searchString = `${req.params.ticker}`;
        const url = `https://api.benzinga.com/api/v1/signal/option_activity?page=1&parameters%5Btickers%5D=${searchString}&token=${process.env.REACT_APP_OPTIONS_KEY}`;

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

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

const port = process.env.PORT || 3000;

app.listen(port, () => {
 console.log('Listening on port', port);
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

