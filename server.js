const express = require("express"),
  app = express(),
  cors = require("cors");

const mongodb = require("mongodb");
var ObjectId = require("mongodb").ObjectID;
const MongoClient = mongodb.MongoClient;
let db;
let MasterList;
let UserLists;

const fetch = require("node-fetch");
const path = require("path");
const { nextTick } = require("process");

app.use(cors());

//Set up HTTPS Force Redirection
if (process.env.NODE_ENV === "production") {
  app.use((req, res, next) => {
    if (req.headers["x-forwarded-proto"] != "https")
      res.redirect("https://www.findmarketplays.com" + req.url);
    else next();
  });
}

//Connect MongoDB
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

//1) Generate the Lists upon Registration: 
app.post("/stockDiscover/:email/register", async (req, res) => {
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
});

app.post('/stockDiscover/:email/swipeLeft/:index', async (req, res) => {
  let email = req.params.email;
  let index = req.params.index;

  MasterList.find({})
    .toArray()
    .then(masterRes => {
      // find left swiped stock using index
      let stock = masterRes[index];

      UserLists.find({'email': email})
      // find user's lists using email
        .toArray()
        .then(userRes => {
          // update user's masterList 
          let lists = userRes[0];
          lists.masterList[index] = 2;

          //update user's leftList
          lists.leftList.push(index);
          //index is saved in DB as a STRING  !!IMPORTANT

          //update DB with new user list
          UserLists.replaceOne(
            {'email': email},
            lists
          )
            .then(updateRes => {
              res.send({ message: updateRes.ops[0].leftList })
            })
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
}) 

//2) Generate the Lists upon next successful Login.
//Should only generate on first successful login after publishing.
app.post("/stockDiscover/:email/login", async (req, res) => {
  let email = `${req.params.email}`;
  UserLists.find({'email': email})
    .toArray()
    .then(userRes => {
      if (!userRes.masterList) {
        MasterList.find({})
          .toArray()
          .then(masterRes => {
            let userLists = {
              email: email,
              masterList: new Array(masterRes.length),
              leftList: [],
              rightList: []
            }
            UserLists.replaceOne({'email': email}, userLists)
              .then((insertRes) => res.send({ message: insertRes.ops[0] }))
              .catch((err) => res.send({ err: err }))
          })
          .catch(err => res.send({ erro: err }))
      } else {
        console.log('Already initialized')
      }
    })
    .catch(err => console.log(err))
})

//Get the user's database reference using email
//Generate a random number 

//Plug the random number into Master List, and get the index # and stock ticker

//Add the index # to the user ML // Add a flag at the same index



app.get(`/stockDiscover/:email/fetch`, (req,res) => {
  //Get the user's database reference using email
  let email = `${req.params.email}`;
  MasterList.find({})
    .toArray()
    .then(masterRes => {
      let length = masterRes.length

      //Find the specific users' DB with the email
      UserLists.find( { 'email': `${email}` } )
        .toArray()
        .then(userRes => {
            //Get the index using random number generator
            userRes = userRes[0]
            let num = Math.floor(Math.random() * Math.floor(length));
            let userMasterL = userRes.masterList;
            let flag = false;

            //in case we get the same one twice
            while (userMasterL[num] != null && !flag) {
              num = Math.floor(Math.random() * Math.floor(length));
              if (userMasterL.every(i => i != null)) {
                flag = true;
                console.log("ALL USED")
              }
            }
            
            userMasterL[num] = 0;

            UserLists.replaceOne(
              {
                email: `${email}`,
              },
              {
                email: email,
                masterList: userMasterL,
                leftList: [],
                rightList: [],
              }
            )
              .then((res) => console.log(res)) //[Not Logging]
              .catch((err) => console.log(err));
            
            //Get the stock information, return the ticker [Not Returning]
            let stock = masterRes[num];
            let ticker = stock.symbol;
            res.send( { message: `${ticker}`, index: num } )
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
})


//Get ticker info from iEX
app.get("/getTicker/:ticker", async (req, res) => {
  var tempJSON = [];
  const searchString = `${req.params.ticker}`;
  const url = `https://cloud.iexapis.com/stable/stock/${searchString}/quote?token=pk_390da679d1534216a7b33daf33f4f142 `;

  await fetch(url, { headers: { Accept: 'application/json' } })
  .then(res => res.json()
  .then((json) => {
      
      tempJSON = json;
      // console.log(tempJSON); <- this works, is logging
  }))
  .catch(err => console.error(err)); // eslint-disable-line
  
  
  res.send({ message: tempJSON });
});

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

//Search unusual options with a ticker
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

//Search unusual options without a ticker [Feed Flow]
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

//Search News for a ticker
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

