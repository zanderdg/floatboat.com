const Amenities = require("../models/Amenities");

exports.create = (req, res, next) => {
  Amenities.create({
    ...req.body,
    Icon: req.awsImages[0],
  })
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
    Amenities.find().then((amenities) => {
      res.status(200).json(amenities);
    });
  } catch (err) {
    res.status(500).json({
      message: err.toString(),
    });
  }
};

exports.delete = async (req, res) => {
  try {
    Amenities.deleteOne({ _id: req.body.id }).then((amenities) => {
      res.status(200).json(amenities);
    });
  } catch (err) {
    res.status(500).json({
      message: err.toString(),
    });
  }
};

exports.update = (req, res, next) => {
  try {
    Amenities.findByIdAndUpdate(req.body.id, req.body, { new: true })
      .then(async () => {
        res.status(200).json({
          message: "Amenities Updated",
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

//   exports.delete = (req, res, next) => {
//     try {
//         //Find the amenities to be deleted and delete it
//         let amenities= Amenities.findById(req.body.id);
//         if(!amenities){res.status(404).send("Not found")}

//         note = Amenities.findByIdAndDelete(req.body.id);
//         res.json({"Success":"Note has been deleted",amenities:amenities});

//       } catch (error) {
//         console.error(error.message);
//         res.status(500).send("Internal server error");
//       }
//   };
