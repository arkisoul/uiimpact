const LoggerMiddleware = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  req.anewprop = "A new prop value";
  res.anothernewprop = "Another new prop value";
  console.log(`${new Date().toISOString()} [${method}] ${url}`);
  next();
};

module.exports = LoggerMiddleware;