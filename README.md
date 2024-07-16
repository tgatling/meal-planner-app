# Meal Planner App

## Description
This is the codebase for the Meal Planner application, designed to help users efficiently manage their recipes and plan their meals. The application is built using React Native and Expo, providing a robust platform for recipe management and meal planning across mobile devices.

## Key Features
- **Recipe Management**: Allows users to view, add, edit, and delete recipes.
- **Meal Planning**: Users can plan their meals on a weekly or monthly basis.
- **Grocery List Generation**: Automatically creates shopping lists based on planned meals.

## Prerequisites
- Node.js
- npm (Node Package Manager)
- Expo CLI
- iOS Simulator / Android Emulator (optional for mobile development)

## Getting Started
To get this project running locally on your machine, follow these steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/meal-planner-app.git
   cd meal-planner-app
   ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Start the Expo development server**
    ```bash
    npx expo start
    ```

4. **Run the application**
   - To run on iOS Simulator (Mac only):
     Press `i` in the terminal where Expo is running
   - To run on Android Emulator:
     Press `a` in the terminal where Expo is running
   - To run on a physical device:
     Scan the QR code with the Expo Go app (Android) or the Camera app (iOS)

## Testing
To ensure the quality and functionality of our application, we use Jest for writing and running our tests. Here are the steps to run the tests:

1. **Run Tests**
   ```bash
   npm test
   ```
   This command will execute all tests and provide a report. For TDD, write your test before developing features to ensure your code meets all defined requirements.

2. **Watch Mode**
    To continuously run tests during development, you can use Jest in watch mode:
    ```bash
    npm test -- --watch
    ```
    This allows you to see test results in real time as you develop and modify your code.

