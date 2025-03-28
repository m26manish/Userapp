# React Native User Management App

![React Native](https://img.shields.io/badge/React_Native-0.70+-61DAFB?logo=react&logoColor=white)
![Reqres API](https://img.shields.io/badge/API-Reqres.in-4A148C)

A complete mobile application demonstrating user authentication and management using React Native and the Reqres.in mock API.

![App Screenshot](screenshots/login-preview.png) <!-- Add your screenshot path here -->

## Features

- **User Authentication**
  - Secure JWT-based login flow
  - Form validation and error handling
- **User Management**
  - View paginated user list
  - Edit user details (first name, last name, email)
  - Delete users with confirmation
- **UI/UX**
  - Responsive layout for all screen sizes
  - Smooth animations and transitions
  - Loading states and error feedback

## Technology Stack

- **Frontend**: React Native
- **Navigation**: React Navigation (Stack)
- **HTTP Client**: Axios
- **State Management**: React Hooks & Context API
- **Styling**: React Native StyleSheet

## API Endpoints Used

| Method | Endpoint            | Description             |
| ------ | ------------------- | ----------------------- |
| POST   | `/api/login`        | User authentication     |
| GET    | `/api/users?page=1` | Get paginated user list |
| PUT    | `/api/users/{id}`   | Update user details     |
| DELETE | `/api/users/{id}`   | Delete user             |

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/react-native-user-manager.git
   cd react-native-user-manager
   ```
   2 . Install dependencies
   npm install

# or

yarn install

3.Run the application

# For Android

npx react-native run-android

# For iOS

npx react-native run-ios 4.
Test Credentials:
Email: eve.holt@reqres.in
Password: cityslicka

5. Run the application on your device or emulator.
