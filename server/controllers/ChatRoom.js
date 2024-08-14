import ChatRoom from "../models/ChatRoom.js";

// Create a new chat room
export const createChatRoom = async (req, res) => {
  const { senderId, receiverId } = req.body; // Destructure senderId and receiverId
  const newChatRoom = new ChatRoom({ members: [senderId, receiverId] }); // Create a chat room

  try {
    await newChatRoom.save(); // Save the chat room to the database
    res.status(201).json(newChatRoom); // Respond with the created chat room
  } catch (error) {
    res.status(409).json({ message: error.message }); // Handle errors
  }
};

// Get all chat rooms for a user
export const getChatRoomOfUser = async (req, res) => {
  try {
    const chatRooms = await ChatRoom.find({ members: req.params.userId }); // Find chat rooms for the user
    res.status(200).json(chatRooms); // Respond with the found chat rooms
  } catch (error) {
    res.status(404).json({ message: error.message }); // Handle errors
  }
};

// Get a specific chat room between two users
export const getChatRoomOfUsers = async (req, res) => {
  try {
    const chatRoom = await ChatRoom.find({
      members: { $all: [req.params.firstUserId, req.params.secondUserId] },
    });
    res.status(200).json(chatRoom); // Respond with the found chat room
  } catch (error) {
    res.status(404).json({ message: error.message }); // Handle errors
  }
};
