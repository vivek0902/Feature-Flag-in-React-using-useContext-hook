# Feature Flag in React using useContext Hook

Live Demo: https://vivek0902.github.io/Feature-Flag-in-React-using-useContext-hook/

## Overview

This project demonstrates how to implement feature flags in a React application using the `useContext` hook. Feature flags allow for selective feature toggling based on user types, such as "free" and "premium" users.

![image](https://github.com/user-attachments/assets/686ead34-94fc-491b-bae3-a8ca2138de40)


## Features

- Feature flag management using React Context API
- Toggle features dynamically based on user type
- Example features include:
  - Dark Mode
  - Chat
  - Audio Chat
  - Video Chat
- Simple UI with toggle switches

## Installation

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/feature-flag-react.git
   cd feature-flag-react
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
   or
   ```sh
   yarn dev
   ```
4. Open `http://localhost:5173` in your browser (if using Vite).

## Project Structure

```
feature-flag-react/
│── public/
│── src/
│   ├── components/
│   │   ├── FeaturesFlagProvider.jsx
│   │   ├── Feature.jsx
│   ├── App.jsx
│   ├── App.css
│── .gitignore
│── package.json
│── vite.config.js
│── README.md
```

## How It Works

- `FeaturesFlagProvider.jsx`: Provides the feature flag context.
- `Feature.jsx`: Checks if a feature is enabled for the current user type.
- Users can switch between "Free" and "Premium" plans to see different features enabled or disabled.

## Usage Example

```jsx
<FeaturesFlagProvider userType={userType}>
  <Feature name="darkMode">
    <label className="toggle-switch">
      <input type="checkbox" />
      <span className="slider"></span>
    </label>
  </Feature>
</FeaturesFlagProvider>
```

## Contributing

Feel free to fork this repository and submit pull requests for improvements!
