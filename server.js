const express = require("express"),
  app = express(),
  cors = require("cors");

const mongodb = require("mongodb");
var ObjectId = require("mongodb").ObjectID;
const MongoClient = mongodb.MongoClient;
let db;
let MasterList;
let UserLists;

MongoClient.connect(
  "mongodb+srv://fmpadmin:fmppassword@fmpcluster.lfrzm.mongodb.net/StockLists?retryWrites=true&w=majority",
  function (err, client) {
    if (err) console.log(err);
    db = client.db("StockLists")
    
    // Sets the collections to variables. A collection is like a table
    MasterList = db.collection("MasterList");
    UserLists = db.collection("UserLists")
  }
);

app.post("/stockDiscover/:email", async (req, res) => {
  let email = `${req.params.email}`;
  MasterList.find({})
    .toArray()
    .then(stuff1 => { 
      let userLists = {
        email: email,
        masterList: new Array(stuff1.length),
        leftList: [],
        rightList: []
      }

      UserLists.insertOne(userLists)
        .then((stuff2) => res.send({ message: stuff2.ops[0] }))
        .catch((err) => console.log(err))
      })
    .catch(err => console.log(err))

  //   UserLists.find({ "id": `${currentUserID}` })
  //       .toArray()
  //       .then(stuff => res.send({message: stuff[0]}))
  //       .catch(err => console.log(err))
  // }
});

const fetch = require("node-fetch");
const path = require('path');
const { nextTick } = require("process");

app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use((req, res, next) => {
    if (req.headers["x-forwarded-proto"] != "https")
      res.redirect("https://www.findmarketplays.com" + req.url);
    else next();
  })
}

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

app.get("/getTicker/:ticker", async (req, res) => {
  var tempJSON = [];
  const searchString = `${req.params.ticker}`;
  const url = `https://cloud.iexapis.com/stable/stock/${searchString}/quote?token=pk_390da679d1534216a7b33daf33f4f142 `;

  await fetch(url, { headers: { Accept: 'application/json' } })
  .then(res => res.json()
  .then((json) => {
      
      tempJSON = json;
      console.log(tempJSON);
  }))
  .catch(err => console.error(err)); // eslint-disable-line
  
  
  res.send({ message: tempJSON });
});

// app.get("/getTicker/Chart/:ticker", async (req, res) => {
//   var tempJSON = [];
//   const searchString = `${req.params.ticker}`;
//   const url = `https://sandbox.iexapis.com/stable/stock/${searchString}/quote?token=Tpk_7b9e02739e7c41c28c51e091d9881319 `;

//   await fetch(url, { headers: { Accept: 'application/json' } })
//   .then(res => res.json()
//   .then((json) => {
      
//       tempJSON = json;
//       console.log(tempJSON);
//   }))
//   .catch(err => console.error(err)); // eslint-disable-line
  
  
//   res.send({ message: tempJSON });
// });

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

