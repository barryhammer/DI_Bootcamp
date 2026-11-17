const axios = require('axios');

async function fetchPosts() { // declares an asynchronous function.
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    // await waits for the Axios request to complete without blocking the Node.js event loop.
    // axios.get() sends a GET request to the external API.

    return response.data; // response.data contains the posts returned by JSONPlaceholder.
}

module.exports = { fetchPosts }; // module.exports makes fetchPosts() available to other files.