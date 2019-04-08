const express = require("express");
const router = express.Router();

// @route  GET api/users/test
// @desc   Tests post route
// @access public
router.get("/test", (req, res) => res.json({ msg: "post api test" }));

module.exports = router;
