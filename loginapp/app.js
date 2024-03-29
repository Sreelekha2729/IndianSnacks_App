const express = require("express")
const cors = require("cors")
const app = express();
const db = require("./db.js");
const dotenv = require("dotenv");
dotenv.config();
// const path = require("path");
// const port = process.env.PORT || 8080;
const AuthController = require("./controller/authController");

app.use(cors());
app.use("/api/auth", AuthController);

// //static folders
// app.use(express.static(path.join(__dirname, "./client/build")));
// //static routes
// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
