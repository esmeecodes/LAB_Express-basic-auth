const router = require("express").Router();
const isLoggedIn = require("../middleware/isLoggedIn");
/* GET home page */
// router.get("/", (req, res, next) => {
//   res.render("index");
// });

router.get("/", isLoggedIn, (req, res, next) => {
  // Check if the incoming request has a valid cookie/session
  let userIsLoggedIn = false;
  if (req.session) {
    if (req.session.currentUser) {
      userIsLoggedIn = true;
    }
  }

  res.render("index", { userIsLoggedIn: userIsLoggedIn });
});

router.get("/private", isLoggedIn, (req, res, next) => {
  res.render("private");
});

router.get("/main", isLoggedIn, (req, res, next) => {
  res.render("main");
});

module.exports = router;
