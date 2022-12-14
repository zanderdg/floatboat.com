const jwt = require("jsonwebtoken");

const Employee = require("../models/Employee");
const Admin = require("../models/Admin");

module.exports = (req, res, next) => {
  //   console.log(token);

  let decodedToken = "";
  try {
    let token = req.get("Authorization");
    if (token) {
      token = token.split(" ")[1];
      decodedToken = jwt.verify(
        token,
        "4=?ADE56GJMC2%7&kF%HTqy8CfTZuj5e2aTKy2g!^F-W%7uP$cUqfuWcQxyVP*ez"
      );
    }
  } catch (err) {
    err.statusCode = 401;
    err.message = "login token not verified";
    res.status(401).json({
      message: err.message,
    });
    throw err.message;
  }

  if (!decodedToken) {
    const err = new Error("Not Authenticated");
    err.statusCode = 401;
    err.message = "User Not Authenticated";
    res.status(401).json({
      message: err.message,
    });
    throw err.message;
  } else {
    // console.log(decodedToken);
    Employee.findById(decodedToken.userId)
      .then((user) => {
        if(user){
          req.userId = decodedToken.userId;
          req.type = decodedToken.userType;
          next();
        }else{
          Admin.findById(decodedToken.userId).then(
            admin => {
              if(admin){
                req.userId = decodedToken.userId;
          req.type = decodedToken.userType;
          next();
              }
            }
          ).catch(err => {
            res.status(401).json("Not Authenticated");
          })

        }
      })
      .catch((err) => {
        res.status(401).json("Not Authenticated");
      });
  }
};
