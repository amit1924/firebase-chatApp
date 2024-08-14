// /* eslint-disable no-unused-vars */
// import axios from "axios";
// import auth from "../config/firebase";
// import { io } from "socket.io-client";

// const baseURL = "http://localhost:3000/api";

// const getUserToken = async () => {
//   const user = auth.currentUser;
//   const token = user && (await user.getIdToken());
//   return token;
// };

// export const initiateSocketConnection = async () => {
//   const token = await getUserToken();

//   const socket = io("http://localhost:3000", {
//     auth: {
//       token,
//     },
//   });
//   return socket;
// };

// const createHeader = async () => {
//   const token = await getUserToken();

//   const payloadHeader = {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   };
//   return payloadHeader;
// };

// export const getAllUsers = async () => {
//   const header = await createHeader();

//   try {
//     const res = await axios.get(`${baseURL}/user`, header);
//     return res.data;
//   } catch (err) {
//     console.error(err);
//   }
// };

// export const getUser = async (userId) => {
//   const header = await createHeader();

//   try {
//     const res = await axios.get(`${baseURL}/user/${userId}`, header);
//     return res.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const getUsers = async (users) => {
//   const header = await createHeader();

//   try {
//     const res = await axios.get(`${baseURL}/user/users`, users, header);
//     return res.data;
//   } catch (e) {
//     console.error(e);
//   }
// };
// export const getChatRooms = async (userId) => {
//   const header = await createHeader();

//   try {
//     const res = await axios.get(`${baseURL}/room/${userId}`, header);
//     return res.data;
//   } catch (e) {
//     console.error(e);
//   }
// };

// export const getChatRoomOfUsers = async (firstUserId, secondUserId) => {
//   const header = await createHeader();

//   try {
//     const res = await axios.get(
//       `${baseURL}/room/${firstUserId}/${secondUserId}`,
//       header
//     );
//     return res.data;
//   } catch (e) {
//     console.error(e);
//   }
// };

// export const createChatRoom = async (members) => {
//   const header = await createHeader();

//   try {
//     const res = await axios.post(`${baseURL}/room`, members, header);
//     return res.data;
//   } catch (e) {
//     console.error(e);
//   }
// };

// export const getMessagesOfChatRoom = async (chatRoomId) => {
//   const header = await createHeader();

//   try {
//     const res = await axios.get(`${baseURL}/message/${chatRoomId}`, header);
//     return res.data;
//   } catch (e) {
//     console.error(e);
//   }
// };

// export const sendMessage = async (messageBody) => {
//   const header = await createHeader();

//   try {
//     const res = await axios.post(`${baseURL}/message`, messageBody, header);
//     return res.data;
//   } catch (e) {
//     console.error(e);
//   }
// };

// /* eslint-disable no-unused-vars */
// import axios from "axios";
// import auth from "../config/firebase";
// import { io } from "socket.io-client";
// // Determine the base URL based on the environment
// const isProduction = window.location.hostname !== "localhost";
// const baseURL = isProduction
//   ? "https://firebase-chat-app-server.vercel.app/api" // Production URL
//   : "http://localhost:3000/api"; // Development URL

// const getUserToken = async () => {
//   const user = auth.currentUser;
//   const token = user && (await user.getIdToken());
//   return token;
// };

// export const initiateSocketConnection = async () => {
//   const token = await getUserToken();

//   const socket = io(
//     isProduction
//       ? "https://firebase-chat-app-server.vercel.app"
//       : "http://localhost:3000",
//     {
//       auth: {
//         token,
//       },
//     }
//   );
//   return socket;
// };

// const createHeader = async () => {
//   const token = await getUserToken();

//   const payloadHeader = {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   };
//   return payloadHeader;
// };

// export const getAllUsers = async () => {
//   const header = await createHeader();

//   try {
//     const res = await axios.get(`${baseURL}/user`, header);
//     return res.data;
//   } catch (err) {
//     console.error(err);
//   }
// };

// export const getUser = async (userId) => {
//   const header = await createHeader();

//   try {
//     const res = await axios.get(`${baseURL}/user/${userId}`, header);
//     return res.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const getUsers = async (users) => {
//   const header = await createHeader();

//   try {
//     const res = await axios.get(`${baseURL}/user/users`, users, header);
//     return res.data;
//   } catch (e) {
//     console.error(e);
//   }
// };
// export const getChatRooms = async (userId) => {
//   const header = await createHeader();

//   try {
//     const res = await axios.get(`${baseURL}/room/${userId}`, header);
//     return res.data;
//   } catch (e) {
//     console.error(e);
//   }
// };

// export const getChatRoomOfUsers = async (firstUserId, secondUserId) => {
//   const header = await createHeader();

//   try {
//     const res = await axios.get(
//       `${baseURL}/room/${firstUserId}/${secondUserId}`,
//       header
//     );
//     return res.data;
//   } catch (e) {
//     console.error(e);
//   }
// };

// export const createChatRoom = async (members) => {
//   const header = await createHeader();

//   try {
//     const res = await axios.post(`${baseURL}/room`, members, header);
//     return res.data;
//   } catch (e) {
//     console.error(e);
//   }
// };

// export const getMessagesOfChatRoom = async (chatRoomId) => {
//   const header = await createHeader();

//   try {
//     const res = await axios.get(`${baseURL}/message/${chatRoomId}`, header);
//     return res.data;
//   } catch (e) {
//     console.error(e);
//   }
// };

// export const sendMessage = async (messageBody) => {
//   const header = await createHeader();

//   try {
//     const res = await axios.post(`${baseURL}/message`, messageBody, header);
//     return res.data;
//   } catch (e) {
//     console.error(e);
//   }
// };

//4th method
/* eslint-disable no-unused-vars */
import axios from "axios";
import auth from "../config/firebase";
import { io } from "socket.io-client";

// Determine the base URL based on the environment
const isProduction = window.location.hostname !== "localhost";
const baseURL = isProduction
  ? "https://firebase-chat-app-server.vercel.app/api" // Production URL
  : "http://localhost:3000/api"; // Development URL

const getUserToken = async () => {
  const user = auth.currentUser;
  const token = user && (await user.getIdToken());
  return token;
};

export const initiateSocketConnection = async () => {
  const token = await getUserToken();

  const socket = io(
    isProduction
      ? "https://firebase-chat-app-server.vercel.app"
      : "http://localhost:3000",
    {
      auth: {
        token,
      },
    }
  );

  // Handle socket connection errors
  socket.on("connect_error", (err) => {
    console.error("Socket connection error:", err.message);
    alert("Failed to connect to the chat server. Please try again.");
  });

  return socket;
};

const createHeader = async () => {
  const token = await getUserToken();

  // Check if token is available
  if (!token) {
    throw new Error("No token available, user may not be authenticated.");
  }

  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
};

// Error handling utility
const handleApiError = (error) => {
  console.error("API Error:", error);
  // Display a user-friendly error message or take appropriate action
  alert(
    "An error occurred while communicating with the server. Please try again."
  );
};

export const getAllUsers = async () => {
  const header = await createHeader();

  try {
    const res = await axios.get(`${baseURL}/user`, header);
    return res.data;
  } catch (err) {
    handleApiError(err);
  }
};

export const getUser = async (userId) => {
  const header = await createHeader();

  try {
    const res = await axios.get(`${baseURL}/user/${userId}`, header);
    return res.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const getUsers = async (users) => {
  const header = await createHeader();

  try {
    const res = await axios.get(`${baseURL}/user/users`, users, header);
    return res.data;
  } catch (e) {
    handleApiError(e);
  }
};

export const getChatRooms = async (userId) => {
  const header = await createHeader();

  try {
    const res = await axios.get(`${baseURL}/room/${userId}`, header);
    return res.data;
  } catch (e) {
    handleApiError(e);
  }
};

export const getChatRoomOfUsers = async (firstUserId, secondUserId) => {
  const header = await createHeader();

  try {
    const res = await axios.get(
      `${baseURL}/room/${firstUserId}/${secondUserId}`,
      header
    );
    return res.data;
  } catch (e) {
    handleApiError(e);
  }
};

export const createChatRoom = async (members) => {
  const header = await createHeader();

  try {
    const res = await axios.post(`${baseURL}/room`, members, header);
    return res.data;
  } catch (e) {
    handleApiError(e);
  }
};

export const getMessagesOfChatRoom = async (chatRoomId) => {
  const header = await createHeader();

  try {
    const res = await axios.get(`${baseURL}/message/${chatRoomId}`, header);
    return res.data;
  } catch (e) {
    handleApiError(e);
  }
};

export const sendMessage = async (messageBody) => {
  const header = await createHeader();

  try {
    const res = await axios.post(`${baseURL}/message`, messageBody, header);
    return res.data;
  } catch (e) {
    handleApiError(e);
  }
};
