const express = require("express"),
  app = express(),
  cors = require("cors");

const fetch = require("node-fetch");
const path = require('path');
// var enforce = require('express-sslify');

app.use(cors());



// if (process.env.NODE_ENV === "production") {
//     app.get('/', function(req, res) {

// req.protocol might be a solution. adding lines 13 through 23 redirected too many times and heroku doesn't load

//       if (req.protocol === 'http') {
//         res.redirect('https://' + 
//         req.get('host') + req.originalUrl)
//       }
//     })
// }

// if(process.env.NODE_ENV === 'production') {
//   app.use((req, res) => {
//     if (req.header('x-forwarded-proto') !== 'https')
//       res.redirect(`https://${req.header('host')}${req.url}`)
//   })
// }

app.get('/betweenSearch/:fromDate/:toDate/:ticker', async (req, res) => {
  let tempJSON = [];
  const fromDate = `${req.params.fromDate}`;
  const toDate = `${req.params.toDate}`;
  const ticker = `${req.params.ticker}`;
  const url = `https://api.benzinga.com/api/v1/signal/option_activity?parameters%5Bdate_from%5D=${fromDate}&parameters%5Bdate_to%5D=${toDate}&parameters%5Btickers%5D=${ticker}&token=bd2570cf59734eb9934b3cd886ce958b`
  console.log(url)
  await fetch(url, { headers: { Accept: 'application/json' } })
    .then(res => res.json()
    .then((json) => {
            
      tempJSON = json;
      // console.log(tempJSON);
    }))
    .catch(err => console.error(err)); // eslint-disable-line
    res.send({ message: tempJSON });  
})

app.get("/optionsAPI/:ticker", async (req, res) => {
        var tempJSON = [];
        const searchString = `${req.params.ticker}`;
        const url = `https://api.benzinga.com/api/v1/signal/option_activity?page=0&parameters%5Btickers%5D=${searchString}&token=bd2570cf59734eb9934b3cd886ce958b`;

        await fetch(url, { headers: { Accept: 'application/json' } })
        .then(res => res.json()
        .then((json) => {
            
            tempJSON = json;
            // console.log(tempJSON);
        }))
        .catch(err => console.error(err)); // eslint-disable-line
        
        
        res.send({ message: tempJSON });
});

app.get("/optionsFeed", async (req, res) => {
  var tempJSON = [];
  const url = `https://api.benzinga.com/api/v1/signal/option_activity?token=bd2570cf59734eb9934b3cd886ce958b`;
  await fetch(url, { headers: { Accept: 'application/json' } })
  .then(res => res.json()
  .then((json) => {
      tempJSON = json;
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

