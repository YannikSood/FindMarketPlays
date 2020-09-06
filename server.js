// import sslRedirect from "heroku-ssl-redirect";
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


// the backend route. be sure to save the master stock list to the MasterList collection 
app.get("/stockDiscover/:currentUserID/:listFlag", async (req, res) => {
  let currentUserID = `${req.params.currentUserID}`;
  let listFlag = `${req.params.listFlag}`;

  // use 'undefined' because params come as a string
  if (listFlag === "undefined") {
    // if user does not have a master list
    
    // grabs master list from MasterList table
    MasterList.find({})
      .toArray()
      .then(results => {
        let userLists = {
          id: currentUserID,
          masterList: results[0],
          leftList: [],
          rightList: [],
        }

        // creates user list 
        UserLists.insertOne(userLists)
          .then((stuff) => res.send({ message: stuff.ops[0]}))
          .catch((err) => console.log(err));
        

      })
      .catch(err => console.log(err))
      
    } else {
      // use DOES have a master list

      // both key-value pairs must be strings
      // replace the search query with ({ "id": `${currentUserID}`})
      UserLists.find({"_id": ObjectId("5f529a1b1fc88992c9fed310")})
        .toArray()
        .then(stuff => res.send({message: stuff[0]}))
        .catch(err => console.log(err))

  }

});

const fetch = require("node-fetch");
const path = require('path');
const { nextTick } = require("process");
// var enforce = require('express-sslify');

// app.use(sslRedirect());
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use((req, res, next) => {
    if (req.headers["x-forwarded-proto"] != "https")
      res.redirect("https://fmp-development.herokuapp.com" + req.url);
    else next();
  })
}

// app.get("*", function (req, res, next) {
//   if (req.headers["x-forwarded-proto"] != "https")
//     res.redirect("https://fmp-development.herokuapp.com" + req.url);
//   else next(); /* Continue to other routes if we're not redirecting */
// });

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

