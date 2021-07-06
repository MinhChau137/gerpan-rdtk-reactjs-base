# Base code for Reacjs App with Redux/ReduxToolkit

This is a base source code for continue developing other project.

I mainly focus on building folders, splitting components for easy future coding.

## Main features

- ✅ `React` version `17.0.2`.
- ❌ UI libraries or frameworks:  (The sample code that have `bootstrap` components just for make UI faster ).
- ✅ Manage global state with `redux` and `redux/toolkit`.
- ✅ Call API from server with `axios`.
- ✅ Routing with `React-router v6` (not stable at this time).

## Before starting

**Clone this project into your local disk**

```
git clone git@github.com:gerpann/gerpan-rdtk-reactjs-base.git
```

## Requirements

- `Node.js` version &ge; `14` (recommend `lts` version)

I recommend you install `yarn` at global scope before running this project

```
npm install -g yarn
```

But `npm` is totally OK!

## File Structure

Current structure of this project

```
gerpan-rdtk-reactjs-base
.
.
├── public
└── src
    ├── assets
    │   ├── images
    │   │   └── .gitkeep
    │   └── styles
    │       ├── Counter
    │       │   └── Counter.module.css
    │       ├── Home
    │       │   └── HomePage.css
    │       └── globalStyle.css
    ├── components
    │   ├── Home
    │   │   └── .gitkeep
    │   ├── Pagination
    │   │   └── index.js
    │   └── Product
    │       ├── ProductCard.js
    │       └── ProductList.js
    ├── configs
    │   ├── constants.js
    │   ├── routes.js
    │   └── store.js
    ├── features
    │   └── Product
    │       ├── productApi.js
    │       └── productSlice.js
    ├── hooks
    │   └── .gitkeep
    ├── layouts
    │   ├── ErrorBoundary
    │   │   └── index.js
    │   └── Main
    │       └── MainLayout.js
    ├── pages
    │   ├── Authen
    │   │   ├── Login.js
    │   │   └── Register.js
    │   ├── Error
    │   │   └── NotFound.js
    │   ├── Home
    │   │   └── Home.js
    │   └── Product
    │       └── Product.js
    ├── theme
    │   └── .gitkeep
    ├── utils
    │   ├── getInitials.js
    │   ├── handleApiRequest.js
    │   └── makeQuery.js
    ├── App.js
    ├── index.js
    ├── serviceWorker.js
    └── setupTests.js
```

## Run and Build project

Before run project, you have to determine some keys in environment variables (in `.env` file)

For sample, you can copy `.env.example` file to have your own `.env.*` file (remember to edit the keys that are appropriate for your project)

```
cp .env.example .env.local
```
for development or
```
cp .env.example .env
```
for production.<br/><br/>

**Script to start project for `development`**

```
yarn start
```

For production, we usually build project and deploy built source code (contains only static files like HTML, JS, CSS) to a server.

```
yarn build
```
then the folder build will appeare in the root path. To deploy, you can serve the file `index.html` in the `build` folder (then reverse port by a server like `apache` or `nginx` (recommended)).

Of course, I had write some other scripts for format code,.... You can find theme in file `package.json` such as `yarn format` to format code according to `.prettierrc` file config.

## Author

**Gerpan**<br/>
