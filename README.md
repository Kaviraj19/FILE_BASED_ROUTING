# File-Based Routing in React Native (Expo)🙂

This project demonstrates the implementation of file-based routing in a React Native application using Expo. The approach simplifies navigation by structuring routes directly through the file system, leveraging Expo Router’s capabilities.

## About the Project

The application features two primary tabs: **Welcome** and **Home**. Each tab contains its respective screens and functionality:

### Welcome Tab

- **Welcome Screen**: A simple welcome screen that navigates to the Signup page.  
- **Sign Up Screen**: Allows new users to create an account.  
- **Login Screen**: Enables existing users to sign in.

### Home Tab

- **Home Screen**: Serves as the main screen, which users are routed to after signing in or signing up through the Welcome tab.

### Highlights

- **File-Based Routing**: Utilized the `_layout.tsx` files for defining layouts and routes. This approach offers a clean and modular way to handle navigation, akin to stack navigators previously implemented in React Native projects.
- **Routing Architecture**: Organized navigation by mirroring folder structures, enhancing maintainability and scalability of the application.

### Key Learnings

- Gained hands-on experience with file-based routing using Expo Router.
- Understood the similarities and differences between `_layout.tsx` and traditional stack navigators in React Native.
