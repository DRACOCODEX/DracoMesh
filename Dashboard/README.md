Threat Dashboard

React web application designed to provide administrative capabilities for Drakube-Graphyon's Threat Dashboard. 
It is built on top of the Material Dashboard 2 PRO React template licensed through Creative Tim.

## Description
The web application will allow viewing/editing of related data through an admin interface. The data will
be populated in the application through calls to the GraphQL Mesh Gateway and Server.

The tech stack is built around a React 18 interface to allow for real-time notifications and data updates. The tech details are below:

Material UI - Library of reusable components. Built off Google's Material design. 
https://mui.com/material-ui/getting-started/overview/

Material UI X - Advanced Components. Many options, but the one used for data display(DataGridPro) is going to be used. 
https://mui.com/x/react-data-grid/getting-started/

Axios - Javascript HTTP Client used for data-fetching requests 
https://axios-http.com/docs/intro

React-Query - Framework for data-fetching that adds caching, stale-data settings, optimistic data retrieval, and alternative to storing data in global state(Redux).
 https://react-query-v3.tanstack.com/

React-Router-Dom - Page routing for single-page-applications (SPA), superset of React Router. 
https://reactrouter.com/en/main

React-cookie - Cookie generation if needed.
https://www.npmjs.com/package/react-cookie

React-Hook-Form - Form library that allows for form state, field validation, and better re-rendering performance.  
https://react-hook-form.com/    
   
Zod - Advanced Field Validation library if needed.  
https://zod.dev/

Jest and React-Testing-Library - Jest is a JavaScript test runner that lets you access the DOM via jsdom. React Testing Library is a set of helpers that let you test React components without relying on their implementation details. 

https://testing-library.com/docs/react-testing-library/intro/
https://jestjs.io/

React-use-websocket - This will allow for receiving real time updates from the REST API server.

https://github.com/robtaussig/react-use-websocket#readme


## Build Requirements
NPM

Environment to run bash scripts (Docker container planned for future)

## Installation

1. Run the followiing through the command line when inside the root directory. This will build the application

```bash
yarn run build
```

followed by this command to run the application

```bash
yarn run install
```

The application will be running on port 3000 by default locally http://localhost:3000/ Check script output to verify port if it does not load.

## Screenshots

<img width="1594" alt="DG Dashboard 000" src="https://github.com/DragonsDen-Forge/Drakube-Graphyon/blob/main/Dashboard/assets/dashboard-view-01.png">

<img width="1594" alt="DG Dashboard 002" src="https://github.com/DragonsDen-Forge/Drakube-Graphyon/assets/149975971/ac97fe6a-9fed-49d6-89a8-e768f884654a">



