# Sprint Challenge Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **how to build web services based on the REST (REpresentational State Transfer) architectural style**. During this sprint, you studied **Node.js and Express, server side routing, how to write Express middleware and how to deploy an API to Heroku**.

In your challenge this week, you will demonstrate your mastery of these skills by designing and creating a web API to manage the following resources: `Projects` and `Actions`.

This is an individual assessment. All work must be your own. All projects will be submitted to Codegrade for automated review. You will also be given feedback by code reviewers the Monday after challenge submissions. For more information on the review process [click here](https://www.notion.so/lambdaschool/How-to-View-Feedback-in-CodeGrade-c5147cee220c4044a25de28bcb6bb54a).

You are not allowed to collaborate during the sprint challenge.

## Introduction

In meeting the minimum viable product (MVP) specifications listed below, your project should provide an API that has Create, Read, Update and Delete (CRUD) functionality for both `projects` and `actions`.

## Instructions

### Task 1: Project Set Up

- [ ] Run `npm install` to install your dependencies.
- [ ] Run tests locally executing `npm test`.
- [ ] Reset the database to its original state executing `npm run resetdb`.

### Task 2: Project Requirements (MVP)

Your finished project must include all of the following requirements:

#### NPM Scripts

A _"test"_ script already exists you can use to run tests against your code.
A _"resetdb"_ script exists that allows you to reset the database to its original state.

- [ ] Write an _npm script_ named _"start"_ that uses `node` to run the API server.
- [ ] Write an _npm script_ named _"server"_ that uses `nodemon` to run the API server.
- [ ] Install _nodemon_ as a development dependency that would not be used in production.

#### Environment Variables

- [ ] Bring the port number from the `process.env` variable, falling back to `5000` if `process.env.PORT` is undefined **!!!**

#### Endpoints

Inside `api/projects/projects-router.js` build the following endpoints:

- [ ] `[GET] /api/projects`
  - Returns an array of projects as the body of the response.
  - If there are no projects it responds with an empty array.
- [ ] `[GET] /api/projects/:id`
  - Returns a project with the given `id` as the body of the response.
  - If there is no project with the given `id` it responds with a status code 404.
- [ ] `[POST] /api/projects`
  - Returns the newly created project as the body of the response.
  - If the request body is missing any of the required fields it responds with a status code 400.
- [ ] `[PUT] /api/projects/:id`
  - Returns the updated project as the body of the response.
  - If there is no project with the given `id` it responds with a status code 404.
  - If the request body is missing any of the required fields it responds with a status code 400.
- [ ] `[DELETE] /api/projects/:id`
  - Returns no response body.
  - If there is no project with the given `id` it responds with a status code 404.
- [ ] `[GET] /api/projects/:id/actions`
  - Returns an array of actions (could be empty) belonging to a project with the given `id`.
  - If there is no project with the given `id` it responds with a status code 404.

Inside `api/actions/actions-router.js` build endpoints for performing CRUD operations on _actions_:

- [ ] `[GET] /api/actions`
  - Returns an array of actions (or an empty array) as the body of the response.
- [ ] `[GET] /api/actions/:id`
  - Returns an action with the given `id` as the body of the response.
  - If there is no action with the given `id` it responds with a status code 404.
- [ ] `[POST] /api/actions`
  - Returns the newly created action as the body of the response.
  - If the request body is missing any of the required fields it responds with a status code 400.
  - When adding an action make sure the `project_id` provided belongs to an existing `project`.
- [ ] `[PUT] /api/actions/:id`
  - Returns the updated action as the body of the response.
  - If there is no action with the given `id` it responds with a status code 404.
  - If the request body is missing any of the required fields it responds with a status code 400.
- [ ] `[DELETE] /api/actions/:id`
  - Returns no response body.
  - If there is no action with the given `id` it responds with a status code 404.

#### Middleware functions

- [ ] Write at least two middleware functions for this API, and consume them in the proper places of your code.

### Database Schemas

The description of the structure and extra information about each _resource_ stored in the included database (`./data/lambda.db3`) is listed below.

#### Projects

| Field       | Data Type | Metadata                                                                |
| ----------- | --------- | ----------------------------------------------------------------------- |
| id          | number    | do not provide it when creating projects, the database will generate it |
| name        | string    | required                                                                |
| description | string    | required                                                                |
| completed   | boolean   | not required, defaults to false when creating projects                  |

#### Actions

| Field       | Data Type | Metadata                                                                                        |
| ----------- | --------- | ----------------------------------------------------------------------------------------------- |
| id          | number    | do not provide it when creating actions, the database will generate it                          |
| project_id  | number    | required, must be the id of an existing project                                                 |
| description | string    | required, up to 128 characters long                                                             |
| notes       | string    | required, no size limit. Used to record additional notes or requirements to complete the action |
| completed   | boolean   | not required, defaults to false when creating actions                                           |

### Database Persistence Helpers

The project includes models you can use to manage the persistence of _project_ and _action_ data. These files are `api/projects/projects-model.js` and `api/actions/actions-model.js`. Both files publish the following api, which you can use to store, modify and retrieve each resource:

**All these helper methods return a promise. Remember to use .then().catch() or async/await.**

- `get()`: resolves to an array of all the resources contained in the database. If you pass an `id` to this method it will return the resource with that id if one is found.
- `insert()`: calling insert passing it a resource object will add it to the database and return the newly created resource.
- `update()`: accepts two arguments, the first is the `id` of the resource to update, and the second is an object with the `changes` to apply. It returns the updated resource. If a resource with the provided `id` is not found, the method returns `null`.
- `remove()`: the remove method accepts an `id` as its first parameter and, upon successfully deleting the resource from the database, returns the number of records deleted.

The `projects-model.js` includes an extra method called `getProjectActions()` that takes a _project id_ as its only argument and returns a list of all the _actions_ for the _project_.

We have provided test data for all the resources.

**Important Notes:**

- Do not make changes to your `package.json` except to add **additional** dependencies and scripts. Do not update existing packages.
- Your app must be able to run in Node v.12. Do not use newer features of Node (e.g.: optional chaining and nullish coalescing NOT supported).
- Use an HTTP client like `HTTPie`, `Postman` or `Insomnia` to manually test the API's endpoints.
- Use Express Routers to organize your endpoints.
- Even though you are only required to write two middleware functions, it is advised that you leverage middlewares as much as possible.
- You are welcome to create additional files, but **do not move or rename existing files** or folders.
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work.

## Submission format

- [ ] Submit via Codegrade by pushing commits to your `main` branch.
- [ ] Check Codegrade before the deadline to compare its results against your local tests.
- [ ] Check Codegrade on the days following the Sprint Challenge for reviewer feedback.
- [ ] New commits will be evaluated by Codegrade if pushed _before_ the sprint challenge deadline.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. The core features of Node.js and Express and why they are useful.
   Node.js is used for backend services like APIs, Web App, or Mobile App. It is an open-source and cross-platform runtime environment for executing JavaScript code outside a browser. The core features of Node.js are:
   -Node.js uses javascript and paradigm for both client and server.
   -JavaScript is single-threaded, which removes the complexity involved in handling multiple threads.
   -JavaScript is asynchronous, which allows us to take full advantage of the processor it's running on.
   -It gives us access to the npm repository.

Express is a small framework that is combined with Node.js to easily organize the application's functionality. It's core features include middleware, routing and routers for application modularity.  
-Middleware are functions that can get the request and response objects, work on them, and trigger an action when specified. -Routing breaks the application into small parts. It is also a way to select which request handler function is executed based on the URL visited and the HTTP method used.
-Routers allow us to break up the application. This improves the functionality of the application. It also allows us to better organize our code by creating different routers to serve our Single Page Applications(SPA) and another router for the API.

1. Understand and explain the use of Middleware.
   Middleware can be grouped into the following catagories:  
    -Built-in middleware - are built in, but not automatically added. An example is the server.use(express.json()); function which is used for parsing JSON content out of the request body.
   -Third-party middleware - use npm modules that can be installed and imported into our applications such as morgan, cors, and helmet.
   -Custom middleware - are functions that we write to perform specific tasks.
   Middleware functions are functions that have access to the request object (req), and the response object (res), and the next middleware function via the variable next() in the application's request-response cycle. Every type of middleware works the same. We tell Express about the middleware we want to turn on for the application by making a call to .use() on our server and passing .use() the piece of middleware we want to apply. The order of the code matters and these requests must come after the server has been created by calling express().
1. The basic principles of the REST architectural style.
   Rest is a generally agreed-pon set of principles and constraints. They are recommendations, not a standard. The basic principles of REST to keep in mind are:
   -everything is a resource.
   -each resource is accessible via a unique URI.
   -resources can have multiple representations.
   -communication happens over a stateless protocol (HTTP).
   -resource management happens via HTTP methods.
1. Understand and explain the use of Express Routers.
   The express.Router() function is used to create a new router object. This function is used when you want to create a new router object in your program to handle requests. It acts like a mini Express application. It can have its own routing and middleware, but it needs to exist inside an Express application.
1. Describe tooling used to manually test the correctness of an API.
   API testing is all about checking whether the applications meet functionality, performance, reliability, and security expectations.
   There many testing tools available. Some of the most popular include Postman, SoapUI, Apigee, and Assertible.

   -Postman allows you to monitor the API, create automated tests, perform debugging, and run requests.

   -SoapUI enables the testing of both web services Rest and Soap APIs.

   -Apigee is a cross-cloud API testing tool and users can access it's features using different editors.

   -Assertible focuses on reliability. It supports running of API tests after deployment.
