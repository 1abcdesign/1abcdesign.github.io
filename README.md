# 1abcdesign.github.io

This project is a modern web application built with Vue 3 and Vite, featuring a dynamic user interface, 3D rendering, internationalization, and contact functionalities. It serves as the frontend for **ABCDesignOne** and provides users with an interactive experience, showcasing various services and gallery items in a structured, multi-lingual format.

## Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Technologies](#technologies)
- [License](#license)

## Project Structure

The main files and directories are organized as follows:
```arduino
1abcdesign.github.io/
├── public/ # Static public assets
├── src/ # Main source code directory
│ ├── App.vue # Main app component
│ ├── assets/ # Static assets for the app
│ │ ├── flatPhotos.js
│ │ └── groupedPhotos.js
│ ├── components/ # Reusable Vue components
│ │ ├── FooterBlock.vue
│ │ ├── HeaderBlock.vue
│ │ ├── LangSwitcher.vue
│ │ ├── LoaderView.vue
│ │ ├── LogoSpinner.vue
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
│ ├── store.js # Reactive global store
│ └── style.css # Global styles
├── index.html # Main HTML template
├── vite.config.js # Vite configuration file
└── package.json # Project dependencies and scripts
```

## Features

- **3D Logo Rendering**: An animated 3D logo created with Three.js for an eye-catching header.
- **Responsive Design**: Fully optimized for both desktop and mobile viewing.
- **Internationalization**: Multilingual support with Vue I18n, easily switchable via the language switcher.
- **Customizable Themes**: Light and dark modes available via the theme switcher.
- **Photo Galleries**: Dynamic photo and service galleries for showcasing design projects.
- **Contact Integration**: Contact forms with email support powered by EmailJS and real-time location data using Google Autocomplete.
- **Error Handling**: A dedicated 404 page with custom navigation options.
- **Optimized Performance**: Built with Vite for fast builds and efficient production-ready output.

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
npm run dev
```

### Production Build

To build the application for production:

```bash
npm run build
```

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

### Deployment

To deploy the site to GitHub Pages, use the following command (ensure the gh-pages branch is set up):

```bash
npm run deploy
```

## Scripts

- **dev**: Starts the Vite development server.
- **build**: Compiles the app for production.
- **preview**: Serves the built app locally for preview.
- **deploy**: Deploys the app to GitHub Pages after building.
- **check:env**: Validates required environment variables in .env.

## Technologies

- **Vue 3**: Framework for building the UI.
- **Three.js**: Library for 3D rendering.
- **Vite**: Build tool and development server.
- **Vue Router**: For managing application navigation.
- **Vue I18n**: For internationalization and multilingual support.
- **EmailJS**: For contact form functionality.
- **Sass**: CSS preprocessor for styling.

## License

This project is licensed under the MIT License.

This README includes sections for project structure, setup, and usage. Feel free to customize it based on additional project specifics!
