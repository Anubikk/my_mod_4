# Practice: Express Route Handlers

In this practice, you will create an Express server with basic Express routes.

Follow the steps outlined below to complete both phases:

* Handle JSON In Request (Basic)
* Create Route Handlers (Basic)

## Getting started

Download the starter. When you open it, you'll find there is a very simple
`app.js` file that is only the setup of an Express application.

Also, there is a folder, __seeds__ that contain seed data for three entities:
artists, albums, and songs. You will be creating API endpoints for these
entities later in this practice.

The __data.js__ file exports multiple functions that execute different
actions on the three entities with varying parameters. You will use these
functions in the route handlers that you will create later in this practice
(phase 2).

## Basic Phase 1: Handle JSON In Request

In this phase, you will enhance the Express server that you set up in a previous
practice to take it from a plain-text server to an API server which can send and
receive JSON-formatted content.

### Parse the JSON body of a request

There's one more piece of boilerplate code necessary to finish the setup of
your Express API server.

Your Express API server should expect to accept requests with bodies with a
`Content-Type` of `application/json`. When it does, it should deserialize the
JSON in the request body. To do this, add this one line of code right **after
the code that initializes the Express application**.

```js
app.use(express.json());
```

Now, any body in a request that is made with a `Content-Type` header of
`application/json` will be deserialized and saved to the `body` property on the
request object, `req.body`.

For example, if the server accepts a request with a JSON body of:

```json
{
  "hello": "world"
}
```

the request object generated by the Express server will have the deserialized
body saved to the `body` property.

```js
// req.body = {
//   hello: "world"
// };
```

### Test a JSON request

To test this set up, add these lines of code right after
`app.use(express.json())`.

```js
app.use((req, res, next) => {
  console.log('Body:', req.body);
  next();
});
```

Then start the server and use Postman to make a request to `POST /` with any 
JSON body. You should see the body contents logged to the server console. If you 
see`Body: undefined`, then you set the boilerplate code incorrectly. Please 
review the setup.

## Basic Phase 2: Create Route Handlers

In this phase, you will create endpoints in the Express server.

Using the following API documentation, create Express route handlers in the
__app.js__ file. Use Postman to test each route as you write it.

The actions that need to be executed in the endpoints are all exported from the
__data.js__ file. In a route handler specific to each endpoint, you should send
a JSON response of the serialized data returned from the referenced function.
For example, to return a JSON array of all artists in the server data for a
request to `GET /artists`, you should use the data from `getAllArtists()`
function exported from the __data.js__ file.

### Get all the artists

Request components:

- Method: GET
- URL: /artists
- Headers: none
- Body: none

Response components:

- Status Code: 200
- Headers:
    - Content-Type: application/json
- Body: information about all the artists
  (returned from `getAllArtists()` function exported from __data.js__)

  ```json
  [
    {
      "artistId": 1,
      "name": "Red Hot Chili Peppers"
    }
  ]
  ```

### Add an artist

Request components:

- Method: POST
- URL: /artists
    - Content-Type: application/json
- Body: information about the artist to be created

  ```json
  {
    "name": "Led Zeppelin"
  }
  ```

Response components:

For setting the status code to `201` instead of the default `200`, call
`res.status(201)` in the route handler before you send the response.

- Status Code: 201
- Headers:
    - Content-Type: application/json
- Body: information about the newly created artist
  (returned from `addArtist(data)` function exported from __data.js__)

  ```json
  {
    "artistId": 2,
    "name": "Led Zeppelin"
  }
  ```