// Custom middleware that checks if the request has a valid cookie
function isLoggedIn(req, res, next) {
  if (!req.session.currentUser) {
    return res.redirect("/login");
  }

  next();
}

module.exports = isLoggedIn;
