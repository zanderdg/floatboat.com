require("dotenv").config();

const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
const axios = require("axios");
const moment = require("moment");
const multer = require("multer");
const { totalmem } = require("os");

const CronJob = require("cron").CronJob;

const app = express();
http.createServer(app);

const port = process.env.PORT || 8000;

//init middleware
app.use(express.json({ extended: false }));
app.use(cors());

app.get("/", (req, res) =>
  res.json({
    message: "Server Running" + ` at port ${port}`,
  })
);

app.use(multer().array("pictures"));

//define routes
app.use("/admin", require("./routes/admin"));
app.use("/amenities", require("./routes/amenities"));
app.use("/boats", require("./routes/boats"));
app.use("/client", require("./routes/client"));
app.use("/ownership", require("./routes/ownership"));

// app.use(express.static(require("path").join(__dirname, "/uploads")));
// app.use("/uploads" , express.static("uploads"))

mongoose
  .connect(
    "mongodb+srv://user101:8wjw1HpFJZvd8kd4@cluster0-56yha.mongodb.net/floatboat?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    }
  )
  .then((result) => {
    app.listen(port);
    console.log(`Connected to PORT ${port} `);
  })
  .catch((err) => {
    console.log(err);
  });

// const calculateInstallment = (
//   price = 3740000,
//   expenseTotal = 1411,
//   ownership = "1/8",
//   downPayment = 30
// ) => {
//   totalMonths = 120;
//   let ownershipSplit = ownership.split("/");
//   let perShareCost =
//     (price * Number(ownershipSplit[0])) / Number(ownershipSplit[1]);
//   let downAmount = (perShareCost * downPayment) / 100;
//   let remainingAmount = perShareCost - downAmount;
//   let financing = ((remainingAmount * 5) / 100) * 10; //whole 10 year financing

//   let monthlyInstallment =
//     expenseTotal * totalMonths + financing + remainingAmount;
//   return {
//     perShareCost,
//     downAmount,
//     financing: (financing / totalMonths).toFixed(),
//     expenseTotal,
//     monthlyInstallment: (monthlyInstallment / totalMonths).toFixed(),
//   };
// };

// console.log("calculateInstallment()", calculateInstallment());
