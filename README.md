# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# DevConnect Web frontEnd

-created a vite + react project and removed unnecessary code
-Install tailwind css and make a correct configuration mentioned in their official site check the version you are using
-Install Daisy ui for custom Components
-Add Navbar Component
-Always maintain folder structure and create a component folder

- installed the react-router
  -use brpserRouter and add the required routes

- Login Functionality
  - create a login page
    -install axios pakage
    -install the CORS in backend side and add middleware to app with congigurations: origin,credentials: true
    -in the ui while making the api always pass {withCredentials:true} along with request body and url route so that we can store token in the cookies of our domain

-install redux toolkit - https://redux-toolkit.js.org/introduction/getting-started

- setup a store and configure store and generate the slice for the user and export it along with actions and add reducer to store
