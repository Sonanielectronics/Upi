var Todo = require("../model/schema");
const HTTP = require("../../constant/response.constant");

class class1 {
  static a = async (req, res) => {
    try {
      res.render("Home");
    } catch (err) {
      console.log(err);
      return res.status(HTTP.SUCCESS).send({
        errors: [
          {
            message: "Something went wrong!",
            code: HTTP.INTERNAL_SERVER_ERROR,
          },
        ],
      });
    }
  };
  static b = async (req, res) => {
    try {
      if (!req.body.Upi) {
        req.body = {
          Upi: "",
        };
      }
      var OriginalData = await Todo.find({ Upi: req.body.Upi });
      if (OriginalData.length !== 0) {
        OriginalData.deleteOne();
      }
      let data = new Todo({
        Upi: req.body.Upi,
      });
      await data.save();
      res.send("Upi Added");
    } catch (err) {
      var OriginalData = await Todo.findOneAndDelete({ Upi: req.body.Upi });
      let data = new Todo({
        Upi: req.body.Upi,
      });
      await data.save();
      res.send("Upi Added");
    }
  };
  static c = async (req, res) => {
    try {
      var OriginalData = await Todo.find({});
      if (OriginalData.length == 0) {
        var Response = {};
        res.send(Response);
      } else {
        res.send(OriginalData[OriginalData.length - 1]);
      }
    } catch (err) {
      console.log(err);
      return res.status(HTTP.SUCCESS).send({
        errors: [
          {
            message: "Something went wrong!",
            code: HTTP.INTERNAL_SERVER_ERROR,
          },
        ],
      });
    }
  };
}

module.exports = { class1 };
