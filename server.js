const express = require("express");
const app = express();
const PORT = 3000;

// HTTP Status Codes Data
const statusCodes = {
  200: "OK: The request has succeeded.",
  201: "Created: The request was successful and a resource was created.",
  204: "No Content: The request was successful, but no content is returned.",
  400: "Bad Request: The server could not understand the request.",
  401: "Unauthorized: Authentication is required.",
  403: "Forbidden: The server refuses to authorize the request.",
  404: "Not Found: The requested resource could not be found.",
  405: "Method Not Allowed: The HTTP method is not supported.",
  429: "Too Many Requests: Rate limit exceeded.",
  500: "Internal Server Error: A generic server error occurred.",
  502: "Bad Gateway: The server received an invalid response.",
  503: "Service Unavailable: The server is overloaded or down.",
  504: "Gateway Timeout: The server did not receive a timely response."
};

// HTTP Status Code API Endpoint
app.get("/status-info", (req, res) => {
  const code = req.query.code;
  if (!code || !statusCodes[code]) {
    return res.status(400).json({
      status: 400,
      message: "Invalid status code: The provided status code is not recognized."
    });
  }
  res.json({
    status: parseInt(code),
    message: statusCodes[code]
  });
});

// Virtual Assistant API Endpoint
app.get("/assistant/greet", (req, res) => {
  const name = req.query.name;
  if (!name) {
    return res.status(400).json({
      status: 400,
      message: "Bad Request: Name parameter is required."
    });
  }
  res.json({
    status: 200,
    message: `Hello, ${name}! How can I assist you today?`
  });
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});