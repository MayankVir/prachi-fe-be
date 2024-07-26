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
// Example optimized query
app.get('/api/data', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM table WHERE column = $1 LIMIT 100', [req.query.value]);
    res.json(result.rows);
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).send('Error fetching data');
  }
});
