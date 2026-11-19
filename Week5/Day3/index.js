const express = require('express');
const app = express();

const PORT = 3002; // Changes port number manually

// Date and Time Middleware
const timestampMiddleware = (req, res, next) => {
  const now = new Date(); // Gets current date

  // Format Date: YYYY-MM-DD
  const date = now.toISOString().split('T')[0];

  // Format Time: HH:MM:SS (24-hour format)
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const time = `${hours}:${minutes}:${seconds}`;

  // Attach to the request object for use in route handlers
  req.requestTimestamp = { date, time };
  next(); // Used to execute the other middleware functions succeeding the current middleware. 

};

// Apply middleware globally
app.use(timestampMiddleware); // Calls timestampMiddleware function.

app.get('/home', (req, res) => {
    res.json({
    message: 'Timestamp retrieved successfully',
    data: req.requestTimestamp
  });
});

app.get('/about', (req, res) => {
    res.json({
    message: 'Timestamp retrieved successfully',
    data: req.requestTimestamp
  });
});

app.listen(3002, () => console.log('Example app listening on port 3002!'));