const router = require("express").Router();
const personRoutes = require("./persons");


// person routes
router.use("/persons", personRoutes);


module.exports = router;
