FeedHenry Sync Angular MBaaS Service
====================================

MBaaS Service for the [sync-angular-client](https://github.com/RHMAP-Sample-Mobile-Apps/sync-angular-client) that runs _fh-rest-express-router_ to expose a RESTful API, and _fh-rest-memory-adapter_ to store items in memory.

## Local Development

Assuming you have node.js and npm installed, you can run this locally like so:

```
cd sync-angular-cloud
npm install
npm start
```

## Testing

Try hitting the running app with cURL or Postman with these requests:

* GET http://localhost:9001/users/ - Should return an empty Object (at first)
* POST http://localhost:9001/users/ - Include a JSON body (be sure to set the
  content-type to "application/json") with "firstname" and "lastname" keys to
  create a new user (stored in node.js memory)
* PUT http://localhost:9001/users/1 - Update the user you created. Same payload format as POST
* GET http://localhost:9001/users/ - Should return an Object with any users now created
* DELETE http://localhost:9001/users/1 - Delete the user you first created.
