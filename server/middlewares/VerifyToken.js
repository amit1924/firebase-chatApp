import auth from "../config/firebase-config.js";
export const VerifyToken = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1]; // Extract the token from the request header

  try {
    const decodeValue = await auth.verifyIdToken(token);
    if (decodeValue) {
      req.user = decodeValue;
      return next();
    }
  } catch (e) {
    return res.json({ message: "Internal Error" });
  }
};

export const VerifySocketToken = async (socket, next) => {
  const token = socket.handshake.auth.token;

  try {
    const decodeValue = await auth.verifyIdToken(token);

    if (decodeValue) {
      socket.user = decodeValue;

      return next();
    }
  } catch (e) {
    return next(new Error("Internal Error"));
  }
};

// VerifyToken checks tokens for regular HTTP requests (like sending messages).

// VerifySocketToken checks tokens for WebSocket connections (like joining a chat room).
