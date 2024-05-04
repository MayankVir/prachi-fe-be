const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(
  cors({
    method: "*",
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Hi, we have received a message");
});

app.post("/submitForm", (req, res) => {
  // First request m se data nikalo for name and email
  const body = req.body;
  console.log({ body });
  // Store it in the db
  data.push(body);
  // Send back the updated data
  res.send({ data });
});

app.listen(8080, () => {
  console.log("listening to port 8080");
});

// GET -> BASE_URL, HEADERS
// POST -> ENDPOINT,  DATA,HEADERS

let data = [];
// Database Query Optimization
// For each database query in the application
//     Use indexed columns for search queries
//     Limit the number of rows returned to what's strictly necessary

