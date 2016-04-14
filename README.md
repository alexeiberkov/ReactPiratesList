# React Pirates List Example

This is the React example from IT Week Spring 2016.

## To use

There are several simple server implementations included. They all serve static files from `public/`. 
This example contains few 6 examples. To switch between them just go to index.html and change number in scripts/example_0.js. It is available from 0 to 5.  

Start a server with one of the following:

### Node

```sh
npm install
node server.js
```

And visit <http://localhost:3000/>. Try opening multiple tabs!

## Changing the port

You can change the port number by setting the `$PORT` environment variable before invoking any of the scripts above, e.g.,

```sh
PORT=3001 node server.js
```
