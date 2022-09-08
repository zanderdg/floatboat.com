const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const randomCode = () => {
  return Math.random().toString(36).substr(2, 8).toUpperCase();
};

exports.create = (req, res, next) => {
  try {
    const email = req.body.email.toLowerCase();
    const password = req.body.password;

    if (password.length >= 8) {
      bcrypt.hash(password, 12).then((hashedPassword) => {
        let payload = {
          ...req.body,
          email,
          passwordRecoveryToken: randomCode(),
          password: hashedPassword,
        };
        Admin.create(payload)
          .then(() => {
            return res.status(200).json({
              message: "Admin Registered Succesfully",
            });
          })
          .catch((err) => {
            console.log(err);
            return res.status(500).json({
              message: "Error Registering Admin",
              err,
            });
          });
      });
    } else {
      return res.status(400).json({
        message: "Password must be greater than or equal to 8 characters",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

exports.login = (req, res, next) => {
  const email = req.body.email.toLowerCase();
  const password = req.body.password;
  let loadedUser = "";

  Admin.findOne({ email })
    .then(async (user) => {
      if (user) {
          loadedUser = user;
          return bcrypt.compare(password, user.password);
        } else {
          const error = new Error("No user found by this email");
          error.statusCode = 401;
          throw error;
        }
    })
    .then((isEqual) => {
      if (!isEqual) {
        const error = new Error("Invalid Password");
        error.statusCode = 400;
        throw error;
      }

      const token = jwt.sign(
        {
          // user: loadedUser,
          userId: loadedUser._id,
        },
        "4=?ADE56GJMC2%7&kF%HTqy8CfTZuj5e2aTKy2g!^F-W%7uP$cUqfuWcQxyVP*ez"
      );

      res.status(200).json({
        message: "Logged In Succesfully",
        token: token,
        user: loadedUser,
      });
    })
    .catch((err) => {
      console.log(err);
      if (err.statusCode === 401) {
        res.status(401).json({
          message: "No Admin found by this email",
        });
      } else if (err.statusCode === 400) {
        res.status(400).json({
          message: "Invalid Password",
        });
      } else {
        res.status(500).json({
          message: "Internal Server Error",
        });
      }
    });
};

