const mongoose = require("mongoose");

const chatModel = mongoose.Schema(
  {
    chatName: { type: String, required: true },
    isGroupChat: { type: Boolean, required: true, default: false },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;

// chatName
// isGroupChat
// users
// latestmessage
// groupAdmin
// createdAt
// updatedAt
// createdBy
// updatedBy
// isDeleted
// deletedBy
// deletedAt
// isArchived
// archivedBy
// archivedAt
// isMuted
// mutedBy
// mutedAt
// isPinned
// pinnedBy
// pinnedAt
// isStarred
// starredBy
// starredAt
// isRead
// readBy
// readAt
// isTyping
// typingBy
// typingAt
// isOnline
// onlineBy
// onlineAt
// isBlocked
// blockedBy
// blockedAt
// isReported
// reportedBy
// reportedAt
// isSpam
// spamBy
// spamAt
// isRestricted
// restrictedBy
// restrictedAt
// isBanned
// bannedBy
// bannedAt
// isMuted
// mutedBy
// mutedAt
// isHidden
// hiddenBy
// hiddenAt
// isBlocked
// blockedBy
// blockedAt