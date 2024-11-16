# 1abcdesign.github.io

This project is a modern web application built with Vue 3 and Vite, featuring a dynamic user interface, 3D rendering, internationalization, and contact functionalities. It serves as the frontend for **ABCDesignOne** and provides users with an interactive experience, showcasing various services and gallery items in a structured, multi-lingual format.

## Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Project Structure

The main files and directories are organized as follows:
```arduino
1abcdesign.github.io/
├── dist/ # Production build output
├── public/ # Static public assets
├── src/ # Main source code directory
│ ├── App.vue # Main app component
│ ├── assets/ # Static assets for the app
│ ├── components/ # Reusable Vue components
│ │ ├── FooterBlock.vue
│ │ ├── HeaderBlock.vue
│ │ ├── LangSwitcher.vue
│ │ ├── LoaderView.vue
│ │ ├── Logo3dView.vue
│ │ ├── PhotoArticle.vue
│ │ ├── PhotoGallery.vue
│ │ ├── ServicesSlider.vue
│ │ └── ThemeSwitcher.vue
│ ├── helpers/ # Utility helper functions
│ │ ├── ipDefaultObject.js
│ │ └── ipInfoHelper.js
│ ├── views/ # Application page components
│ │ ├── 404.vue
│ │ ├── Company.vue
│ │ ├── Contacts.vue
│ │ ├── Home.vue
│ │ └── Services.vue
│ ├── clickOutside.js # Custom directive for handling outside clicks
│ ├── i18n.js # Internationalization configuration
│ ├── main.js # App entry point
│ ├── router.js # Router configuration
│ └── style.css # Global styles
├── index.html # Main HTML template
├── vite.config.js # Vite configuration file
└── package.json # Project dependencies and scripts
```

## Features

- **Responsive Design**: Optimized for both desktop and mobile devices.
- **3D Logo Rendering**: Renders a 3D logo with Three.js.
- **Internationalization**: Supports multiple languages (configured in `i18n.js`).
- **Theming**: Customizable themes with a theme switcher.
- **Dynamic Content**: Photo galleries and service slides showcasing design services.

## Installation

To set up the project locally, clone the repository and install dependencies:

```bash
git clone https://github.com/abcdesign1/1abcdesign.github.io.git
cd 1abcdesign.github.io
npm install
```

## Usage

### Development Server

To start a local development server with hot-reloading:

```bash
Copy code
npm run dev
Production Build
```

To build the application for production:

```bash
Copy code
npm run build
Preview Production Build
```

To preview the production build locally:

```bash
Copy code
npm run preview
```

### Deployment

To deploy the site to GitHub Pages, use the following command (ensure the gh-pages branch is set up):

```bash
Copy code
npm run deploy
```

## Scripts

- **dev**: Starts the Vite development server.
- **build**: Compiles the app for production.
- **preview**: Serves the built app locally for preview.
- **deploy**: Deploys the app to GitHub Pages after building.

## Technologies

- **Vue 3**: JavaScript framework for building user interfaces.
- **Vite**: Development server and build tool.
- **Three.js**: 3D graphics library for rendering the logo in 3D.
- **Vue Router**: Router for handling navigation.
- **Vue i18n**: Internationalization plugin for multi-language support.
- **Sass**: Preprocessor for CSS.

## Contributing

If you’d like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License

This project is licensed under the MIT License.

This README includes sections for project structure, setup, and usage. Feel free to customize it based on additional project specifics!
