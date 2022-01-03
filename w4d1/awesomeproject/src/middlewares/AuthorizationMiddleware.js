const jwt = require("jsonwebtoken");

const AuthorizationMiddleware = async (req, res, next) => {
  try {
    // 1st Approach - using cookies / cookie-parser
    const token = req.cookies.access_token;
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Missing authorization data" });
    }

    // 2nd Approach - using Authorization header - bearer token
    /* const authorizationHeader = req.header('authorization');
    if(!authorizationHeader) {
      return res
        .status(401)
        .json({ success: false, message: "Missing authorization data" });
    }

    const authorizationHeaderSplit = authorizationHeader.split(' ');
    if(authorizationHeaderSplit[0].toLowerCase() !== 'bearer' || (!authorizationHeaderSplit[1] || authorizationHeaderSplit[1].length === 0)) {
      return res
        .status(401)
        .json({ success: false, message: "Missing authorization data" });
    }

    const token = authorizationHeaderSplit[1].length; */

    const decodedData = await jwt.verify(token, "averyrandomsecurestring");
    req.userId = decodedData.userId;
    req.userRole = decodedData.role;
    req.user = { userId: decodedData.userId, userRole: decodedData.role };

    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: error.message });
  }
};

module.exports = AuthorizationMiddleware;
