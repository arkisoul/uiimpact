# Nodejs Assignment

- Create a nodejs http server.
- Handle below routes in your server.
    - GET / Sends a welcome message. Set appropriate status code, message and headers.
    - POST /patients Create a patient with below fields. Use static data for now. Store patients details in a patient array. (no use of database). Set appropriate status code, message and headers.
        name, age, height, weight, address, id (Math.random function to generate a random id)
    - GET /patients Send list of available patients from the patients array. Set appropriate status code, message and headers.
    - GET /readme Read the content from a readme file and send it back as response. Use streams for this. Set appropriate status code, message and headers.
    - POST /readme Create a readme file using stream. Use static content for this purpose. Set appropriate status code, message and headers.


### External References
1. HTTP Status codes [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
2. Nodejs streams [here](https://nodejs.org/api/stream.html)
3. Nodejs http server [here](https://nodejs.org/api/http.html)