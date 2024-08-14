// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import { Server } from "socket.io";
// import { VerifyToken, VerifySocketToken } from "./middlewares/VerifyToken.js";
// import "./mongo.js"; // Import your MongoDB setup if needed
// import chatRoomRoutes from "./routes/ChatRoom.js";
// import chatMessageRoutes from "./routes/ChatMessage.js";
// import userRoutes from "./routes/user.js";
// import admin from "firebase-admin"; // Make sure to import Firebase Admin

// const app = express();
// dotenv.config();

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.use(VerifyToken);

// const PORT = process.env.PORT || 3000;

// // Define onlineUsers as a Map to store user IDs and their corresponding socket IDs
// const onlineUsers = new Map();

// app.use("/api/room", chatRoomRoutes);
// app.use("/api/message", chatMessageRoutes);
// app.use("/api/user", userRoutes);

// const server = app.listen(PORT, () => {
//   console.log(`Server is listening on ${PORT}`);
// });

// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:5173", // Update this with your client URL
//     credentials: true,
//   },
// });

// io.use(VerifySocketToken);

// const getKey = (map, val) => {
//   for (let [key, value] of map.entries()) {
//     if (value === val) return key;
//   }
// };

// io.on("connection", (socket) => {
//   global.chatSocket = socket;

//   socket.on("addUser", (userId) => {
//     onlineUsers.set(userId, socket.id);
//     socket.emit("getUsers", Array.from(onlineUsers));
//   });

//   // Remove user after logout
//   socket.on("removeUser", (userId) => {
//     onlineUsers.delete(userId); // Remove user from online users
//     io.emit("getUsers", Array.from(onlineUsers.keys())); // Broadcast updated online users
//   });

//   socket.on("sendMessage", async ({ senderId, receiverId, message }) => {
//     // Fetch the sender's name from Firebase
//     const senderName = await getUserNameById(senderId);

//     const sendUserSocket = onlineUsers.get(receiverId);
//     if (sendUserSocket) {
//       socket.to(sendUserSocket).emit("getMessage", {
//         senderId,
//         senderName, // Include sender's name
//         message,
//         receiverId,
//       });
//     }
//   });

//   // Function to get user name by ID from Firebase
//   const getUserNameById = async (userId) => {
//     try {
//       const userRecord = await admin.auth().getUser(userId); // Fetch user from Firebase
//       return userRecord.displayName || "Unknown User"; // Return displayName or fallback
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//       return "Unknown User"; // Fallback if there's an error
//     }
//   };

//   socket.on("disconnect", () => {
//     onlineUsers.delete(getKey(onlineUsers, socket.id));
//     socket.emit("getUsers", Array.from(onlineUsers));
//   });
// });

// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import { Server } from "socket.io";
// import { VerifyToken, VerifySocketToken } from "./middlewares/VerifyToken.js";
// import "./mongo.js"; // Import your MongoDB setup if needed
// import chatRoomRoutes from "./routes/ChatRoom.js";
// import chatMessageRoutes from "./routes/ChatMessage.js";
// import userRoutes from "./routes/user.js";
// import admin from "firebase-admin"; // Make sure to import Firebase Admin

// const app = express();
// dotenv.config();

// app.use(
//   cors({
//     origin: ["http://localhost:5173", "https://universal-chat-app.vercel.app"],
//     methods: ["GET", "POST"],
//     credentials: true,
//   })
// );
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.use(VerifyToken);

// const PORT = process.env.PORT || 3000;

// // Define onlineUsers as a Map to store user IDs and their corresponding socket IDs
// const onlineUsers = new Map();

// app.use("/api/room", chatRoomRoutes);
// app.use("/api/message", chatMessageRoutes);
// app.use("/api/user", userRoutes);

// const server = app.listen(PORT, () => {
//   console.log(`Server is listening on ${PORT}`);
// });

// const io = new Server(server, {
//   cors: {
//     origin: ["http://localhost:5173", "https://universal-chat-app.vercel.app"],
//     credentials: true,
//   },
// });

// io.use(VerifySocketToken);

// const getKey = (map, val) => {
//   for (let [key, value] of map.entries()) {
//     if (value === val) return key;
//   }
// };

// io.on("connection", (socket) => {
//   global.chatSocket = socket;

//   socket.on("addUser", (userId) => {
//     onlineUsers.set(userId, socket.id);
//     socket.emit("getUsers", Array.from(onlineUsers));
//   });

//   // Remove user after logout
//   socket.on("removeUser", (userId) => {
//     onlineUsers.delete(userId); // Remove user from online users
//     io.emit("getUsers", Array.from(onlineUsers.keys())); // Broadcast updated online users
//   });

//   socket.on("sendMessage", async ({ senderId, receiverId, message }) => {
//     // Fetch the sender's name from Firebase
//     const senderName = await getUserNameById(senderId);

//     const sendUserSocket = onlineUsers.get(receiverId);
//     if (sendUserSocket) {
//       socket.to(sendUserSocket).emit("getMessage", {
//         senderId,
//         senderName, // Include sender's name
//         message,
//         receiverId,
//       });
//     }
//   });

//   // Function to get user name by ID from Firebase
//   const getUserNameById = async (userId) => {
//     try {
//       const userRecord = await admin.auth().getUser(userId); // Fetch user from Firebase
//       return userRecord.displayName || "Unknown User"; // Return displayName or fallback
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//       return "Unknown User"; // Fallback if there's an error
//     }
//   };

//   socket.on("disconnect", () => {
//     onlineUsers.delete(getKey(onlineUsers, socket.id));
//     socket.emit("getUsers", Array.from(onlineUsers));
//   });
// });

//3rd try
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Server } from "socket.io";
import { VerifyToken, VerifySocketToken } from "./middlewares/VerifyToken.js";
import "./mongo.js"; // Import your MongoDB setup if needed
import chatRoomRoutes from "./routes/ChatRoom.js";
import chatMessageRoutes from "./routes/ChatMessage.js";
import userRoutes from "./routes/user.js";
import admin from "firebase-admin"; // Make sure to import Firebase Admin

const app = express();
dotenv.config();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://universal-chat-app.vercel.app"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(VerifyToken);

const PORT = process.env.PORT || 3000;

// Define onlineUsers as a Map to store user IDs and their corresponding socket IDs
const onlineUsers = new Map();

app.use("/api/room", chatRoomRoutes);
app.use("/api/message", chatMessageRoutes);
app.use("/api/user", userRoutes);

const server = app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173", "https://universal-chat-app.vercel.app"],
    credentials: true,
  },
});

io.use(VerifySocketToken);

const getKey = (map, val) => {
  for (let [key, value] of map.entries()) {
    if (value === val) return key;
  }
};

io.on("connection", (socket) => {
  global.chatSocket = socket;

  socket.on("addUser", (userId) => {
    try {
      onlineUsers.set(userId, socket.id);
      socket.emit("getUsers", Array.from(onlineUsers));
    } catch (error) {
      console.error("Error adding user:", error);
      socket.emit("error", { message: "Failed to add user" });
    }
  });

  // Remove user after logout
  socket.on("removeUser", (userId) => {
    try {
      onlineUsers.delete(userId); // Remove user from online users
      io.emit("getUsers", Array.from(onlineUsers.keys())); // Broadcast updated online users
    } catch (error) {
      console.error("Error removing user:", error);
      socket.emit("error", { message: "Failed to remove user" });
    }
  });

  socket.on("sendMessage", async ({ senderId, receiverId, message }) => {
    try {
      const senderName = await getUserNameById(senderId);
      const sendUserSocket = onlineUsers.get(receiverId);
      if (sendUserSocket) {
        socket.to(sendUserSocket).emit("getMessage", {
          senderId,
          senderName,
          message,
          receiverId,
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      socket.emit("error", { message: "Failed to send message" });
    }
  });

  // Function to get user name by ID from Firebase
  const getUserNameById = async (userId) => {
    try {
      const userRecord = await admin.auth().getUser(userId); // Fetch user from Firebase
      return userRecord.displayName || "Unknown User"; // Return displayName or fallback
    } catch (error) {
      console.error("Error fetching user data:", error);
      return "Unknown User"; // Fallback if there's an error
    }
  };

  socket.on("disconnect", () => {
    try {
      onlineUsers.delete(getKey(onlineUsers, socket.id));
      socket.emit("getUsers", Array.from(onlineUsers));
    } catch (error) {
      console.error("Error on disconnect:", error);
    }
  });
});
