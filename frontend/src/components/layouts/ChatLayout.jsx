/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import {
  getAllUsers,
  getChatRooms,
  initiateSocketConnection,
  getUser, // Import the getUser function
} from "../../services/ChatService";
import { useAuth } from "../../contexts/AuthContext";

import ChatRoom from "../chat/ChatRoom";
import Welcome from "../chat/Welcome";
import AllUsers from "../chat/AllUsers";
import SearchUsers from "../chat/SearchUsers";

export default function ChatLayout() {
  const [users, SetUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [chatRooms, setChatRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [currentChat, setCurrentChat] = useState();
  const [onlineUsersId, setOnlineUsersId] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isContact, setIsContact] = useState(false);
  const [notifications, setNotifications] = useState([]); // State for notifications

  const socket = useRef();
  const { currentUser, logout } = useAuth();

  useEffect(() => {
    const getSocket = async () => {
      const res = await initiateSocketConnection();
      socket.current = res;

      // Add user to online users
      socket.current.emit("addUser", currentUser.uid);
      socket.current.on("getUsers", (users) => {
        const userId = users.map((u) => u[0]);
        setOnlineUsersId(userId);
      });

      //     // Listen for incoming messages
      //     socket.current.on("getMessage", async (data) => {
      //       // Only show notification if the message is for the current user
      //       if (data.receiverId === currentUser.uid) {
      //         // Fetch the sender's name using their ID
      //         const senderUser = await getUser(data.senderId);
      //         const senderName = senderUser
      //           ? senderUser.displayName
      //           : "Unknown User";

      //         // Update notifications with sender's name
      //         setNotifications((prev) => [
      //           ...prev,
      //           { ...data, senderName }, // Include sender's name in the notification
      //         ]);
      //       }
      //     });
      //   };

      //   getSocket();

      //   // Cleanup on unmount
      //   return () => {
      //     if (socket.current) {
      //       socket.current.disconnect();
      //     }
      //   };
      // }, [currentUser.uid]);

      // Another method

      // Listen for incoming messages
      socket.current.on("getMessage", (data) => {
        // Only show notification if the message is for the current user
        if (data.receiverId === currentUser.uid) {
          // Fetch the sender's name using their ID
          getUser(data.senderId).then((senderUser) => {
            const senderName = senderUser
              ? senderUser.displayName
              : "Unknown User";

            // Update notifications with sender's name
            setNotifications((prev) => [
              ...prev,
              { ...data, senderName }, // Include sender's name in the notification
            ]);
          });
        }
      });
    };

    getSocket();

    // Cleanup on unmount
    return () => {
      if (socket.current) {
        socket.current.disconnect();
      }
    };
  }, [currentUser.uid]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getChatRooms(currentUser.uid);
      setChatRooms(res);
    };

    fetchData();
  }, [currentUser.uid]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllUsers();
      SetUsers(res);
    };

    fetchData();
  }, []);

  useEffect(() => {
    setFilteredUsers(users);
    setFilteredRooms(chatRooms);
  }, [users, chatRooms]);

  useEffect(() => {
    if (isContact) {
      setFilteredUsers([]);
    } else {
      setFilteredRooms([]);
    }
  }, [isContact]);

  const handleChatChange = (chat) => {
    setCurrentChat(chat);

    // Clear notifications for this chat user when opened
    setNotifications(
      (prev) => prev.filter((n) => n.senderId !== chat.members[0]) // Assuming chat.members[0] is the user ID
    );
  };

  const handleSearch = (newSearchQuery) => {
    setSearchQuery(newSearchQuery);

    const searchedUsers = users.filter((user) =>
      user.displayName.toLowerCase().includes(newSearchQuery.toLowerCase())
    );

    const searchedUsersId = searchedUsers.map((u) => u.uid);

    if (chatRooms.length !== 0) {
      chatRooms.forEach((chatRoom) => {
        const isUserContact = chatRoom.members.some(
          (e) => e !== currentUser.uid && searchedUsersId.includes(e)
        );
        setIsContact(isUserContact);
        isUserContact
          ? setFilteredRooms([chatRoom])
          : setFilteredUsers(searchedUsers);
      });
    } else {
      setFilteredUsers(searchedUsers);
    }
  };

  const handleLogout = () => {
    socket.current.emit("removeUser", currentUser.uid); // Emit a logout event
    logout(); // Call the logout function from your Auth context
  };

  return (
    <div className="container mx-auto">
      <div className="min-w-full bg-white border-x border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700 rounded lg:grid lg:grid-cols-3">
        <div className="bg-white border-r border-gray-200 dark:bg-gray-900 dark:border-gray-700 lg:col-span-1">
          <SearchUsers handleSearch={handleSearch} />
          <AllUsers
            users={searchQuery !== "" ? filteredUsers : users}
            chatRooms={searchQuery !== "" ? filteredRooms : chatRooms}
            setChatRooms={setChatRooms}
            onlineUsersId={onlineUsersId}
            currentUser={currentUser}
            changeChat={handleChatChange}
          />
          {/* Display notifications */}
          {notifications.length > 0 && (
            <div className="notifications">
              {notifications.map((notification, index) => (
                <div key={index} className="notification">
                  New message from {notification.senderName}:{" "}
                  {notification.message}
                </div>
              ))}
            </div>
          )}
        </div>

        {currentChat ? (
          <ChatRoom
            currentChat={currentChat}
            currentUser={currentUser}
            socket={socket}
          />
        ) : (
          <Welcome />
        )}
      </div>
      {/* <button onClick={handleLogout}>Logout</button> Logout button */}
    </div>
  );
}
