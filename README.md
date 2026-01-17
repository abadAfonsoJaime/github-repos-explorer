# GitHub Repository Explorer

A modern React application that allows users to search for GitHub repositories and explore their release information. Built with React 19 and the GitHub API, this application provides an intuitive interface for discovering popular repositories and viewing detailed release history.

## 🌟 Features

- **Repository Search**: Search GitHub repositories using the official GitHub API with support for sorting by stars
- **Real-time Results**: View search results with detailed repository information
- **Release Information**: Explore release history and details for selected repositories
- **Pagination**: Navigate through multiple release pages with an intuitive paginator
- **Avatar Display**: GitHub user avatars displayed for repository owners
- **Responsive Design**: Clean, modern UI that works across different screen sizes
- **Error Handling**: Comprehensive error handling for API failures
- **Loading States**: Visual feedback during data fetching operations

## 📋 Project Structure

```
src/
├── components/              # Reusable UI components
│   ├── About/              # About component
│   ├── ExternalLink/       # External link wrapper
│   ├── FormattedDate/      # Date formatting component
│   ├── GithubAvatar/       # GitHub user avatar display
│   ├── Header/             # Application header
│   ├── HintMessage/        # Hint/info message display
│   ├── Paginator/          # Pagination controls
│   ├── ReleaseList/        # List of repository releases
│   ├── ReleaseRow/         # Individual release row
│   ├── RepositoryList/     # List of repositories
│   ├── RepositoryRow/      # Individual repository row
│   └── SearchForm/         # Search input form
├── containers/             # Container/smart components
│   ├── BaseContainer/      # Root layout wrapper
│   ├── DetailsContainer/   # Release details view
│   └── SearchContainer/    # Repository search logic
├── App.js                  # Main application component
├── App.css                 # Application styles
└── index.js                # React DOM entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd search-repos
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

## 📚 Available Scripts

### `npm start`

Runs the app in development mode. The application will automatically reload when you make changes.

```bash
npm start
```

### `npm test`

Launches the test runner in interactive watch mode. This project includes test files for key components.

```bash
npm test
```

### `npm run build`

Creates an optimized production build of the application in the `build` folder.

```bash
npm run build
```

### `npm run eject`

**Note: This is a one-way operation. Once you eject, you cannot go back.**

Ejects the application from Create React App configuration, giving you full control over webpack, Babel, and ESLint configuration.

```bash
npm run eject
```

## 🔧 Technology Stack

- **React 19.2.3** - UI library for building user interfaces
- **React DOM 19.2.3** - React package for rendering to the DOM
- **GitHub API** - Data source for repository and release information
- **React Scripts 5.0.1** - Build and development tools
- **Testing Library** - Testing utilities for React components
  - @testing-library/react
  - @testing-library/dom
  - @testing-library/jest-dom

## 🏗️ Component Architecture

### Containers
- **SearchContainer**: Manages repository search logic, API calls, and pagination state
- **DetailsContainer**: Handles release information display and pagination for selected repository
- **BaseContainer**: Provides layout wrapper and common styling

### Components
- **SearchForm**: User input form for repository queries
- **RepositoryList**: Displays search results in a list format
- **RepositoryRow**: Individual repository display with key information and "View Releases" button
- **ReleaseList**: Shows releases for a selected repository
- **ReleaseRow**: Individual release information display
- **Paginator**: Navigation controls for pagination (both repositories and releases)
- **Header**: Application title and branding
- **GithubAvatar**: Displays GitHub user profile pictures
- **FormattedDate**: Formats dates for consistent display
- **ExternalLink**: Wrapper for external links with consistent styling
- **HintMessage**: Displays helpful hints and information messages
- **About**: Application information and help content

## 🔄 User Interaction Flow

1. **Search Repositories**: User enters search query in SearchForm
2. **View Results**: SearchContainer displays matching repositories with pagination
3. **Select Repository**: User clicks "View Releases" button on a RepositoryRow
4. **Load Releases**: DetailsContainer fetches and displays releases for the selected repository
5. **Navigate Releases**: User can paginate through releases if repository has multiple pages
6. **Only One Selection**: Only one repository's releases can be displayed at a time
7. **View on GitHub**: User can click repository name or individual release links to open in new tab

## 🌐 API Integration

### Repository Search API
This application uses the GitHub REST API v3 for repository searches:

```
GET https://api.github.com/search/repositories?q={query}&sort=stars&per_page=10&page={page}
```

**Features:**
- Searches across all public GitHub repositories
- Results sorted by star count (most popular first)
- Returns up to 10 results per request
- Implements pagination for browsing large result sets
- Rate limited to 60 requests per hour for unauthenticated users

### Release Information API
When a repository is selected, the application fetches its release history:

```
GET https://api.github.com/repos/{owner}/{repo}/releases?per_page=10&page={page}
```

**Data Flow:**
1. User searches for repositories in SearchContainer
2. SearchContainer displays matching repositories using RepositoryList
3. Each RepositoryRow has a "View Releases" button
4. Clicking "View Releases" passes the repository to App.js
5. App.js passes the selected repository to DetailsContainer
6. DetailsContainer triggers API call to fetch releases
7. ReleaseList displays releases with pagination support
8. Only one repository's releases are displayed at a time

**Features:**
- Searches across all public GitHub repositories
- Results sorted by star count (most popular first)
- Returns up to 10 results per request
- Implements pagination for browsing large result sets
- Rate limited to 60 requests per hour for unauthenticated users
- Exclusive release selection (only one repository at a time)

## 🧪 Testing

The project includes test files for critical components:
- [src/App.test.js](src/App.test.js) - Application-level tests
- [src/components/Header/Header.test.js](src/components/Header/Header.test.js) - Header component tests
- [src/components/RepositoryList/RepositoryList.test.js](src/components/RepositoryList/RepositoryList.test.js) - Repository list tests

Run tests with:
```bash
npm test
```

## 📦 Build and Deployment

### Creating a Production Build

```bash
npm run build
```

This creates an optimized production build ready for deployment. The build is minified and includes hashing for cache busting.

### Deployment Options

The application can be deployed to various platforms:
- **Netlify** - Connect your GitHub repository for automatic deployments
- **Vercel** - Zero-config deployment for React applications
- **GitHub Pages** - Free static site hosting
- **Traditional hosting** - Upload the `build` folder to any static hosting service

## 🛠️ Development Workflow

1. Create a new branch for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and test them:
   ```bash
   npm test
   ```

3. Build to verify production readiness:
   ```bash
   npm run build
   ```

4. Commit and push your changes:
   ```bash
   git commit -am 'Add your feature'
   git push origin feature/your-feature-name
   ```

5. Create a Pull Request on GitHub

## 📝 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is part of a personal learning initiative and is available for educational purposes.

## 🔗 Useful Resources

- [React Documentation](https://react.dev)
- [GitHub API Documentation](https://docs.github.com/en/rest)
- [Create React App Documentation](https://create-react-app.dev)
- [Web Vitals](https://web.dev/vitals/)

## 📧 Support

For issues, questions, or suggestions, please create an issue in the repository or contact the project maintainer.

---

**Last Updated:** January 2026  
**React Version:** 19.2.3  
**Status:** Active Development

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
