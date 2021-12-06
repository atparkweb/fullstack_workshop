# Fullstack App From Scratch

## Requirements
- [ ] NPM
- [ ] Heroku Account + Heroku CLI

## Steps to set up and deploy your first fullstack app
1. Create a new React App: `npx create-react-app --use-npm first-fullstack`
1. Initialize git: `git init`
1. Add a `server.js` file in root directory.
1. Write an Express server in `server.js`:
  a. Init server: `const app = express()`
  b. Define PORT: `const port = process.env.PORT || 4000`
  c. Listen:
    ```
    app.listen(port, () => console.log("Server listening on port ", port))
    ```
  d. Add middleware for static files: `app.use(express.static(path.join(__dirname, "/build")))`
    - make sure to import path first: `const path = require('path')`
  e. Add some API endpoints
1. Add proxy to `package.json`: `"proxy": "http://localhost:4000" (this is only for local development)
1. Add scripts to build and run server
1. Try calling API from react App component with:
  - `useEffect`
  - `axios` or `fetch`
  - Make sure to use `useState` for data
1. Add a `Procfile` in the root directory with script to run: example: `web: npm run server`
1. When you're ready to deploy:
  - [ ] `heroku login` login using browser then go back to terminal
  - [ ] `heroku create [option app name]`
  - [ ] Commit files with git
  - [ ] Push to heroku: `git push heroku master`