# Task Management Dashboard

A modern task management application built with React and Tailwind CSS, featuring a clean and intuitive user interface for managing tasks efficiently.

## Features

- Create, read, update, and delete tasks
- Modern and responsive UI built with Tailwind CSS
- Real-time task updates
- RESTful API integration with JSON Server

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## Getting Started

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd task-management-dashboard
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

The application requires two terminal windows to run:

1. Start the JSON Server (mock backend):
```bash
npm run server
```
This will start the mock API server on http://localhost:3001

2. In a new terminal, start the React development server:
```bash
npm start
```
This will start the application on http://localhost:3000

## Project Architecture

### Frontend Structure
```
src/
├── components/     # Reusable UI components
├── services/       # API and data services
├── App.js         # Main application component
└── index.js       # Application entry point
```

### Technology Stack

- **Frontend Framework**: React.js
- **Styling**: Tailwind CSS
- **API Mocking**: JSON Server
- **Development Tools**: 
  - Create React App
  - PostCSS
  - Autoprefixer

### Key Features

1. **Component-Based Architecture**
   - Modular and reusable components
   - Clean separation of concerns
   - Easy to maintain and scale

2. **Responsive Design**
   - Mobile-first approach
   - Tailwind CSS for styling
   - Consistent UI across devices

3. **Data Management**
   - JSON Server for mock API
   - RESTful API integration
   - Real-time data updates

## Development

### Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run server`: Starts the JSON Server for mock API

### Code Style

- Follow React best practices
- Use functional components with hooks
- Implement proper error handling
- Write clean and maintainable code

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
