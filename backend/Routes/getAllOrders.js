const router = require("express").Router();
const users = require("../Models/user");
router.get("/", async (req, res) => {
  try {
    console.log("hi");
    users
      .find({ userid: req.query.userid })
      .then((data) => {
        res.status(201).send(data);
      })
      .catch((error) => {
        res.status(408).send({ error });
      });
  } catch (error) {
    res.send({ error });
  }
});
module.exports = router;
