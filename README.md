# Conway's Game of Life

---

Live: https://jren-game-of-life.netlify.app

Live: https://jren-game-of-life.vercel.app


## What is Game of Life?

The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. 

It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves. 

It is Turing complete and can simulate a universal constructor or any other Turing machine.

[from Wikipedia](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)


## What is Cellular Automata? 

A _cellular automaton_ (plural: cellular automata, abbreviated _CA_) is a program that operates on data typically stored in a 2D grid. (1D, 3D and _n_-D cellular automata run on lines, cubes, etc.)

A simple set of rules describes how the value in a cell on the grid changes over time, often as the result of the states of that cell's neighbors.

> Sometimes neighbors includes the 4 orthogonally adjacent cells; sometimes it > includes all 8 surrounding cells including diagonals.

Each round of the simulation examines the current state of the grid, and then produces an entirely new grid consisting of the old state. (Remember the discussion about double buffers earlier--we don't want to modify the same grid we're examining, lest we munge future results.)

This new grid becomes the "current" state of the simulation, and the process repeats. Each new grid is referred to as a _generation_.

The beautiful thing about cellular automata is that sometimes very complex behavior can emerge from very simple rules.

Practically speaking, CAs have been used in biological and chemical simulations and other areas of research, such as CA-based computer processors, and other numeric techniques.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
