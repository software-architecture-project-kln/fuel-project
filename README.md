# FuelIQ

## Software Architecture Project

FuelIQ is a software solution comprising a web interface, backend service, and a mobile application. Below are the setup instructions for each component.

---

## Web Interface

### Technologies Used:
- React
- Vite

### How to Start the Web Interface

1. Clone the repository and move to the `fuel-project` folder:
   ```sh
   git clone <repository-url>
   cd fuel-project
   ```
2. Open a terminal and run the following commands:
   ```sh
   cd web-interface
   npm install
   npm run dev
   ```
3. Open a web browser and navigate to:
   ```
   http://localhost:5173/
   ```

---

## Backend Service

### Technologies Used:
- Java Spring Boot

### How to Start the Backend

1. Open the `FuelBackend` folder in IntelliJ IDEA or any other IDE.
2. In a terminal, run the following commands:
   ```sh
   cd FuelBackend
   mvn clean install
   mvn spring-boot:run
   ```

---

## Mobile Application

### Technologies Used:
- React Native (Expo)

### How to Start the Mobile Application

1. Navigate to the mobile application folder:
   ```sh
   cd fuel-station-app-employee
   ```
2. Install dependencies and start the application:
   ```sh
   npm install
   npx expo start -c
   ```

---

## Notes
- Ensure you have Node.js, npm, and Java installed on your system.
- For the backend, ensure you have Maven installed.
- The mobile application requires an Expo environment to be set up on your device or emulator.

---

## License
This project is licensed under [Your License Here].

