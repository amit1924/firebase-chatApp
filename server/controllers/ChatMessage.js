import ChatMessage from "../models/ChatMessage.js"; // Import the ChatMessage model

// Function to create a new message
export const createMessage = async (req, res) => {
  // Create a new ChatMessage instance using the request body
  const newMessage = new ChatMessage(req.body);

  try {
    await newMessage.save(); // Save the new message to the database
    res.status(201).json(newMessage); // Respond with the created message and a 201 status
  } catch (error) {
    res.status(409).json({
      // Handle any errors that occur during saving
      message: error.message, // Respond with the error message and a 409 status
    });
  }
};

// Function to get all messages in a specific chat room
export const getMessages = async (req, res) => {
  try {
    // Find messages that belong to the specified chat room using chatRoomId from request parameters
    const messages = await ChatMessage.find({
      chatRoomId: req.params.chatRoomId,
    });
    res.status(200).json(messages); // Respond with the found messages and a 200 status
  } catch (error) {
    res.status(409).json({
      // Handle any errors that occur during the find operation
      message: error.message, // Respond with the error message and a 409 status
    });
  }
};
