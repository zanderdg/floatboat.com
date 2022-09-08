const Ownership = require("../models/Ownership");

exports.create = (req, res, next) => {
  Ownership.create(req.body)
    .then(() => {
      return res.status(200).json({
        message: "Success",
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        message: "Error",
        err,
      });
    });
};

exports.getAll = async (req, res) => {
  try {
    Ownership.find().then((ownership) => {
      res.status(200).json(ownership);
    });
  } catch (err) {
    res.status(500).json({
      message: err.toString(),
    });
  }
};

exports.delete = async (req, res) => {
  try {
    Ownership.deleteOne({ _id: req.body.id }).then((ownership) => {
      res.status(200).json(ownership);
    });
  } catch (err) {
    res.status(500).json({
      message: err.toString(),
    });
  }
};

exports.update = (req, res, next) => {
    try {
        Ownership.findByIdAndUpdate(req.body.id, req.body, { new: true })
        .then(async () => {
          res.status(200).json({
            message: "Ownership Updated",
          });
        })
        .catch((err) => {
          res.status(400).json({
            message: err,
          });
        });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };
