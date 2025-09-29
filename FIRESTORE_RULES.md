# Firestore Security Rules

To fix the Firebase Firestore 400 error, you need to set up proper security rules in your Firebase console.

## Current Issue

The error `400 (Bad Request)` indicates that your Firestore requests are being blocked, likely due to restrictive security rules or missing authentication.

## Solution Steps

### 1. Go to Firebase Console

1. Visit [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `followerscrape-533b5`
3. Navigate to "Firestore Database" → "Rules"

### 2. Update Firestore Rules

Replace the current rules with these **temporary development rules**:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow authenticated users to read/write their own conversation data
    match /conversations/{userId}/messages/{messageId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }

    // Allow authenticated users to create conversation documents
    match /conversations/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }

    // For development only - remove in production
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### 3. For Production

Once you're ready for production, use more restrictive rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only access their own conversation data
    match /conversations/{userId}/messages/{messageId} {
      allow read, write: if request.auth != null &&
                         request.auth.uid == userId &&
                         request.auth.uid == resource.data.userId;
    }

    // Allow users to create their conversation collection
    match /conversations/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

### 4. Authentication Setup

Make sure your authentication is working properly:

- Users must be signed in through Firebase Auth
- The chatbot now uses `onAuthStateChanged` to check authentication
- Messages are associated with the authenticated user's UID

### 5. Test the Fix

1. Sign in a user through your authentication system
2. Try sending a message in the chatbot
3. Check if the 400 error is resolved

## Notes

- The updated chatbot component now includes proper error handling
- Messages are properly associated with authenticated users
- Real-time listeners have error handling to prevent crashes
