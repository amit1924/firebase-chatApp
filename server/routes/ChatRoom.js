import express from "express";

import {
  createChatRoom,
  getChatRoomOfUser,
  getChatRoomOfUsers,
} from "../controllers/ChatRoom.js";

const router = express.Router();

router.post("/", createChatRoom);
router.get("/:userId", getChatRoomOfUser);
router.get("/:firstUserId/:secondUserId", getChatRoomOfUsers);

export default router;
