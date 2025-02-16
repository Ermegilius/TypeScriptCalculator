# TypeScript Calculator

This project is a simple calculator web application built with React, TypeScript, Vite, and Material UI (MUI). It demonstrates basic arithmetic operations along with modern React component design and a responsive layout.

## Features

-   **Arithmetic Operations:** Addition, subtraction, multiplication, and division.
-   **Responsive UI:** Built with Material UI for a modern, clean, and responsive design.
-   **Interactive Display:** Shows real-time calculation results in a read-only text field.
-   **Keyboard Support:** Use numeric and operator keys as well as Enter and Escape for calculations and clearing.

## Project Structure

-   **src/** - The main source code
    -   **App.tsx** – Main calculator component
    -   **services/calculator.ts** – Contains calculation logic
    -   **styles/** – CSS files for styling
    -   \***\*tests**/\*\* – Test files using Jest and React Testing Library
-   **index.html** – The HTML entry point
-   **vite.config.ts** – Vite configuration file
-   **tsconfig\*.json** – TypeScript configurations for app, node, and Jest
-   **jest.config.js & jest.setup.ts** – Jest configuration and setup files

## Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/yourusername/TypeScriptCalculator.git
    ```

2. **Navigate to the project directory:**

    ```sh
    cd TypeScriptCalculator
    ```

3. **Install dependencies:**

    ```sh
    npm install
    ```

## Development

Start the development server with Vite:

```sh
npm run dev
```

Then open your browser and navigate to [http://localhost:5173](http://localhost:5173) to view the application.

## Testing

```sh
npm test
```

## Build for Production

To create a production build, run:

```sh
npm run build
```

Then open your browser and navigate to [http://localhost:4173](http://localhost:4173) to view the application.

## Technologies Used

-   **React** for building the UI
-   **TypeScript** for type safety
-   **Material UI (MUI)** for UI components
-   **JavaScript (ES6+)** for core functionality

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests for improvements or bug fixes.
