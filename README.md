# MERN Store

This is a full-stack e-commerce application built using the MERN stack. It allows users to create, read, update, and delete products.

## Technologies Used

- **MongoDB**: For the database to store product information.
- **Express.js**: For the back-end server and API.
- **React.js**: For the front-end user interface.
- **Node.js**: For the back-end runtime environment.
- **Chakra UI**: For the front-end components and styling.
- **Zustand**: For state management in the front-end.
- **Vite**: For the front-end build tool and development server.

## Features

- **Product Management**: Users can create, read, update, and delete products.
- **Responsive Design**: The application is responsive and works on different screen sizes.
- **Dark Mode**: Users can toggle between light and dark modes.
- **State Management**: Global state management using Zustand.
- **API Integration**: Front-end communicates with the back-end via RESTful APIs.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/codeswiam/mern-store.git
   cd mern-store
   ```

2. Install dependencies for the back-end:
   ```sh
   npm install
   ```

3. Install dependencies for the front-end:
   ```sh
   cd frontend
   npm install
   ```

4. Create a `.env` file in the root directory and add your MongoDB URI:
   ```env
   MONGO_URI=your_mongodb_uri
   PORT=5050
   ```

### Running the Application

1. Start the back-end server:
   ```sh
   npm run dev
   ```

2. Start the front-end development server:
   ```sh
   cd frontend
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5050`.

## Scripts

- `npm run dev`: Starts the back-end server in development mode.
- `npm run build`: Builds the front-end application.
- `npm run start`: Starts the back-end server in production mode.