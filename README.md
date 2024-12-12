# Vite + React Project

This is a poc project built with **Vite** and **React**, enhanced with **Material-UI** and **React Router**.

The steps for creating this app.

## Creating a New Vite + React Project

1. **Initialize the Project**
   ```bash
   npm create vite@latest my-vite-react-app -- --template react
   cd my-vite-react-app
   ```

   Alternatively, if using Yarn:
   ```bash
yarn create vite my-vite-react-app --template react
cd my-vite-react-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Add Material-UI (MUI)**
   ```bash
   npm install @mui/material @emotion/react @emotion/styled
   # or
   yarn add @mui/material @emotion/react @emotion/styled
   ```

4. **Add React Router**
   ```bash
   npm install react-router-dom
   # or
   yarn add react-router-dom
   ```

## Running the Project

1. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. Open your browser and navigate to `http://localhost:5173`.

## Project Structure

Here is a typical project structure:
```
my-vite-react-app/
├── public/           # Static assets
├── src/
│   ├── components/   # Reusable components
│   ├── pages/        # React Router pages
│   ├── App.jsx       # Main App component
│   ├── main.jsx      # Application entry point
│   └── index.css     # Global styles
├── .gitignore        # Git ignore file
├── package.json      # Dependencies and scripts
├── vite.config.js    # Vite configuration
└── README.md         # Project documentation
```

## Building for Production

To create an optimized production build:
```bash
npm run build
# or
yarn build
```

The build output will be in the `dist` folder.