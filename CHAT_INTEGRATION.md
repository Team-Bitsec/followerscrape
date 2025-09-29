# Integrated Chat System Documentation

## Overview

The chat system now integrates the user-facing chatbot with the admin dashboard for seamless communication between users and administrators.

## How It Works

### User Side (Chatbot Component)

1. **Authentication**: Users must sign in through Firebase Auth to use the chatbot
2. **Sending Messages**: User messages are saved to the `chats` collection in Firestore
3. **Real-time Updates**: Users receive admin replies in real-time
4. **User Status**: User online/offline status is tracked in the `userStatus` collection
5. **Notifications**: When users send messages, notifications are created for admins

### Admin Side (Dashboard Messages Page)

1. **User List**: All users who have sent messages appear in the left sidebar
2. **Unread Indicators**: Red badges show the count of unread messages from each user
3. **Real-time Chat**: Admins can select any user and see the conversation history
4. **Admin Replies**: Admin messages are marked with `isAdmin: true` and sent to specific users
5. **Auto-read**: User messages are automatically marked as read when admin views the conversation

## Data Structure

### Collections Used:

#### 1. `chats` Collection

```javascript
{
  id: "document_id",
  text: "message content",
  uid: "user_id", // or "admin" for admin messages
  displayName: "User Name",
  timestamp: Timestamp,
  isRead: boolean,
  isAdmin: boolean, // true for admin messages, false for user messages
  recipientId: "user_id" // only for admin messages, specifies which user receives it
}
```

#### 2. `userStatus` Collection

```javascript
{
  uid: "user_id",
  displayName: "User Name",
  lastActive: Timestamp,
  isActive: boolean // true if online, false if offline
}
```

#### 3. `notifications` Collection

```javascript
{
  message: "notification text",
  userId: "user_id",
  userName: "User Name",
  timestamp: Timestamp,
  isRead: boolean
}
```

## Key Features

### For Users:

- ✅ Real-time messaging with admin
- ✅ Authentication required
- ✅ Message history (today's messages only)
- ✅ Clear chat functionality
- ✅ Online status indicator
- ✅ Error handling and user feedback

### For Admins:

- ✅ See all users who have sent messages
- ✅ Unread message count per user
- ✅ Real-time conversation view
- ✅ Reply to specific users
- ✅ User online/offline status
- ✅ Auto-mark messages as read
- ✅ Sorted by last activity

## Flow Example:

1. **User sends message**:

   - Message saved to `chats` collection
   - User status updated in `userStatus`
   - Notification created for admin

2. **Admin sees notification**:

   - User appears in left sidebar with unread count
   - Admin clicks on user to view conversation

3. **Admin replies**:

   - Admin message saved to `chats` with `isAdmin: true`
   - Message sent to specific user via `recipientId`

4. **User receives reply**:
   - Chatbot shows admin message in real-time
   - Admin messages appear on the left side (gray background)

## Firebase Security Rules Needed:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Chat messages
    match /chats/{messageId} {
      allow read, write: if request.auth != null;
    }

    // User status
    match /userStatus/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.auth.uid == userId;
    }

    // Notifications (admin only for write)
    match /notifications/{notificationId} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## Testing the Integration:

1. **User Test**:

   - Sign in to the app
   - Open chatbot and send a message
   - Verify message appears in admin dashboard

2. **Admin Test**:

   - Go to admin dashboard messages page
   - See user in left sidebar with unread count
   - Click user and reply to their message
   - Verify user receives the reply in chatbot

3. **Real-time Test**:
   - Keep both chatbot and admin dashboard open
   - Send messages from both sides
   - Verify real-time updates work correctly
