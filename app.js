let express = require("express");
let app = express();
let port = 2729;
let { ObjectId } = require("mongodb");
let bodyParser = require("body-parser");
let cors = require("cors");
let {
  dbConnect,
  getData,
  postData,
  deleteData,
  updateData,
} = require("../Controller/dbController");

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hiii From Express");
});

// PAGE-1 get all sweets,savouries,vadiyalu,podulu,veg-pickles,non-vegpickles

// app.get("/sweets", async (req, res) => {
//   let query = {};
//   let collection = "sweets";
//   let output = await getData(collection, query);
//   res.send(output);
// });

//app.get("/savouries", async (req, res) => {
// let query = {};
// let collection = "savouries";
// let output = await getData(collection, query);
// res.send(output);
//});

//app.get("/vadiyalu", async (req, res) => {
// let query = {};
//  let collection = "vadiyalu";
//  let output = await getData(collection, query);
//  res.send(output);
//});

//app.get("/podulu", async (req, res) => {
//  let query = {};
//  let collection = "podulu";
// query = { price: req.query.price };
// let output = await getData(collection, query);
// res.send(output);
// });

// app.get("/veg-pickles", async (req, res) => {
//   let query = {};
//   let collection = "veg-pickles";
//   let output = await getData(collection, query);
//   res.send(output);
// });

// app.get("/non-vegpickles", async (req, res) => {
//   let query = {};
//   let collection = "non-vegpickles";
//   let output = await getData(collection, query);
//   res.send(output);
// });

// PAGE-2

//sweets wrt price,sweets wrt rating,sweets wrt weight
app.get("/sweets", async (req, res) => {
  let lcost = Number(req.query.lcost);
  let hcost = Number(req.query.hcost);
  let query = {};
  let collection = "sweets";
  console.log("Price", req.query.price);
  if (req.query.price) {
    query = { price: Number(req.query.price) };
  } else if (lcost && hcost) {
    query = { price: { $gt: lcost, $lt: hcost } };
  } else if (req.query.rating) {
    query = { rating: Number(req.query.rating) };
  } else if (req.query.weight) {
    query = { weight: req.query.weight };
  }
  let output = await getData(collection, query);
  res.send(output);
});

//savouries wrt price,sweets wrt rating,sweets wrt weight
app.get("/savouries", async (req, res) => {
  let lcost = Number(req.query.lcost);
  let hcost = Number(req.query.hcost);
  let query = {};
  let collection = "savouries";
  console.log("Price", req.query.price);
  if (req.query.price) {
    query = { price: Number(req.query.price) };
  }else if (lcost && hcost) {
    query = { price: { $gt: lcost, $lt: hcost } };
  } else if (req.query.rating) {
    query = { rating: Number(req.query.rating) };
  } else if (req.query.weight) {
    query = { weight: req.query.weight };
  }
  let output = await getData(collection, query);
  res.send(output);
});

//vadiyalu wrt price,sweets wrt rating,sweets wrt weight
app.get("/vadiyalu", async (req, res) => {
  let lcost = Number(req.query.lcost);
  let hcost = Number(req.query.hcost);
  let query = {};
  let collection = "vadiyalu";
  console.log("Price", req.query.price);
  if (req.query.price) {
    query = { price: Number(req.query.price) };
     } else if (lcost && hcost) {
    query = { price: { $gt: lcost, $lt: hcost } };
  } else if (req.query.rating) {
    query = { rating: Number(req.query.rating) };
  } else if (req.query.weight) {
    query = { weight: req.query.weight };
  }
  let output = await getData(collection, query);
  res.send(output);
});

//podulu wrt price,sweets wrt rating,sweets wrt weight
app.get("/podulu", async (req, res) => {
  let lcost = Number(req.query.lcost);
  let hcost = Number(req.query.hcost);
  let query = {};
  let collection = "podulu";
  console.log("Price", req.query.price);
  if (req.query.price) {
    query = { price: Number(req.query.price) };
     } else if (lcost && hcost) {
    query = { price: { $gt: lcost, $lt: hcost } };
  } else if (req.query.rating) {
    query = { rating: Number(req.query.rating) };
  } else if (req.query.weight) {
    query = { weight: req.query.weight };
  }
  let output = await getData(collection, query);
  res.send(output);
});

//veg-pickles wrt price,sweets wrt rating,sweets wrt weight
app.get("/veg-pickles", async (req, res) => {
  let lcost = Number(req.query.lcost);
  let hcost = Number(req.query.hcost);
  let query = {};
  let collection = "veg-pickles";
  console.log("Price", req.query.price);
  if (req.query.price) {
    query = { price: Number(req.query.price) };
     } else if (lcost && hcost) {
    query = { price: { $gt: lcost, $lt: hcost } };
  } else if (req.query.rating) {
    query = { rating: Number(req.query.rating) };
  } else if (req.query.weight) {
    query = { weight: req.query.weight };
  }
  let output = await getData(collection, query);
  res.send(output);
});

//non-vegpickles wrt price,sweets wrt rating,sweets wrt weight
app.get("/non-vegpickles", async (req, res) => {
  let query = {};
  let collection = "non-vegpickles";
  let lcost = Number(req.query.lcost);
  let hcost = Number(req.query.hcost);
  console.log("Price", req.query.price);
  if (req.query.price) {
    query = { price: Number(req.query.price) };
     } else if (lcost && hcost) {
    query = { price: { $gt: lcost, $lt: hcost } };
  } else if (req.query.rating) {
    query = { rating: Number(req.query.rating) };
  } else if (req.query.weight) {
    query = { weight: req.query.weight };
  }
  let output = await getData(collection, query);
  res.send(output);
});

//get orders
app.get("/orders", async (req, res) => {
  let query = {};
  let collection = "orders";
  if (req.query.email) {
    query = { email: req.query.email };
  }

  console.log("query", query);
  let output = await getData(collection, query);
  res.send(output);
});

//placeOrder
app.post("/placeOrder", async (req, res) => {
  let body = req.body;
  let collection = "orders";
  let response = await postData(collection, body);
  res.send(response);
});

// get all userInfo
app.get("/userInfo", async (req, res) => {
  let query = {};
  let collection = "userinfo";
  let output = await getData(collection, query);
  res.send(output);
});

//menudetails wrt to itemId {"itemId":[4,8,11]}
app.post("/menuDetails", async (req, res) => {
  if (Array.isArray(req.body.itemId)) {
    let query = { itemId: { $in: req.body.itemId } };
    let collection = "menudetails";
    let output = await getData(collection, query);
    res.send(output);
  } else {
    res.send("Please pass data in from of array");
  }
});

//update order status
app.put("/updateOrder", async (req, res) => {
  let collection = "orders";
  let condition = { _id: new ObjectId(req.body._id) };
  let data = {
    $set: {
      status: req.body.status,
    },
  };
  let output = await updateData(collection, condition, data);
  res.send(output);
});

//delete order
app.delete("/deleteOrder", async (req, res) => {
  let collection = "orders";
  let condition = { _id: new ObjectId(req.body._id) };
  let output = await deleteData(collection, condition);
  res.send(output);
});

app.listen(port, (err) => {
  dbConnect();
  if (err) throw err;
  console.log(`Server is running on port ${port}`);
});
