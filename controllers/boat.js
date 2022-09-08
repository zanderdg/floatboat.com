const Boat = require("../models/Boat");

exports.create = (req, res, next) => {
  //calculate expense
  let total = 0;
  let expense = JSON.parse(req.body.expenses);
  total += expense.propertyTax;
  total += expense.cleaningFee;
  total += expense.propertyManagement;
  total += expense.maintenance;
  total += expense.utilities;
  total += expense.programManagementFee;
  total += expense.insurance;
  total += expense.repairReserve;

  Boat.create({
    ...req.body,
    expenseTotal: total,
    expenses: expense,
    amenities: JSON.parse(req.body.amenities),
    images: req.awsImages?.length > 0 ? req.awsImages : [],
  })
    .then(() => {
      return res.status(200).json({
        message: "Boat Added Successfuly",
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

exports.logs = async (req, res) => {
  try {
    console.log(req.query);
    const searchParam = req.query.searchString
      ? { name: { $regex: req.query.searchString, $options: "i" } }
      : {};
    // const from = req.query.from ? req.query.from : null;
    // const to = req.query.to ? req.query.to : null;

    const priceFrom = req.query.priceFrom ? req.query.priceFrom : null;
    const priceTo = req.query.priceTo ? req.query.priceTo : null;

    const destination = req.query.destination
      ? { destination: { $in: req.query.destination } }
      : {};

    const zipCodes = req.query.zipCodes ? { zipCode: req.query.zipCodes } : {};
    // let dateFilter = {};
    // if (from && to)
    //   dateFilter = {
    //     createdAt: {
    //       $gte: moment(new Date(from)).startOf("day"),
    //       $lte: moment(new Date(to)).endOf("day"),
    //     },
    //   };
    let priceRange = {};
    if (priceFrom && priceTo)
      priceRange = {
        price: {
          $gte: Number(priceFrom),
          $lte: Number(priceTo),
        },
      };

    const boats = await Boat.paginate(
      {
        ...searchParam,
        ...priceRange,
        ...destination,
        ...zipCodes,
      },
      {
        page: req.query.page,
        limit: req.query.perPage,
        lean: true,
        sort:
          req.query.orderBy === "newest"
            ? { createdAt: -1 }
            : req.query.orderBy === "lowest"
            ? { price: 1 }
            : req.query.orderBy === "highest"
            ? { price: -1 }
            : { createdAt: -1 },
      }
    );
    await res.status(200).json(boats);
  } catch (err) {
    res.status(500).json({
      message: err.toString(),
    });
  }
};

exports.getPriceRange = async (req, res) => {
  try {
    // const maxQuery = Boat.find().limit(1);
    // const minQuery = Boat.find().sort({ price: 1 }).limit(1);
    // console.log("maxQuery", maxQuery);
    // console.log("minQuery", minQuery);
    const maxPrice = await Boat.paginate(
      {},
      {
        page: 1,
        limit: 1,
        lean: true,
        sort: { price: -1 },
      }
    );
    const minPrice = await Boat.paginate(
      {},
      {
        page: 1,
        limit: 1,
        lean: true,
        sort: { price: 1 },
      }
    );

    res.status(200).json({
      // maxPrice,
      maxPrice: maxPrice?.docs ? maxPrice?.docs?.[0]?.price : 0,
      minPrice: minPrice?.docs ? minPrice?.docs?.[0]?.price : 0,
    });
  } catch (err) {
    res.status(500).json({
      message: err.toString(),
    });
  }
};

exports.getAllDestinations = async (req, res) => {
  try {
    Boat.find()
      .distinct("destination")
      .then((boat) => {
        res.status(200).json(boat);
      });
  } catch (err) {
    res.status(500).json({
      message: err.toString(),
    });
  }
};

exports.getById = async (req, res) => {
  try {
    Boat.findById(req.params.id)
      .populate("amenities")
      .then((boat) => {
        res.status(200).json(boat);
      });
  } catch (err) {
    res.status(500).json({
      message: err.toString(),
    });
  }
};

exports.delete = async (req, res) => {
  try {
    Boat.deleteOne({ _id: req.body.id }).then((boat) => {
      res.status(200).json(boat);
    });
  } catch (err) {
    res.status(500).json({
      message: err.toString(),
    });
  }
};

exports.update = (req, res, next) => {
  try {
    Boat.findByIdAndUpdate(req.body.id, req.body, { new: true })
      .then(async () => {
        res.status(200).json({
          message: "Boat Updated",
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
