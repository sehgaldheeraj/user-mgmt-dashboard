# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## `challenges`
Structuring the components and managing their interactions posed a challenge, especially when implementing features like modals for adding users. It required careful planning to ensure a clean and maintainable component hierarchy.
Integrating with the RESTful API for user data management required handling asynchronous operations and error handling effectively. Inability of jsonPlaceholder providing PUT, DELETE and POST methods made the development difficult because it was nearly impossible to edit data for the users we add on our own, maintaining the users data on local was the only option.
Designing a user-friendly interface and ensuring responsiveness across different screen sizes presented challenges in terms of CSS styling and achieving consistency in design and layout required iterative adjustments.
Managing state effectively within the application, especially when dealing with forms and any dialogs, required careful consideration of state management techniques such as React hooks and still was a part that left me wondering how to go about it.

## `scope of improvement`
Replacing jsonHolder with the fully functional backend is one of the major scopes that can make this application an absolute goliath and provide ease in terms of rendering correct data and flashing error and success toasters that will only increase the ease of user.
In terms of functionality, the site works just fine, only the part of UI that needs a massive upgrade was something that could've been achieved with more time in hand.
