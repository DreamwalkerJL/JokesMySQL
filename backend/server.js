import express, { json } from "express";
import mysql from "mysql";
import bodyParser from "body-parser";
import cors from "cors";
import path from 'path'
import {fileURLToPath} from 'url';
import dotenv from 'dotenv'

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "qwer1234!@#$",
  database: "test",
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());

// parse application/json
app.use(bodyParser.json());

app.use(express.json());

app.get("/", (req, res) => {
  res.json("hello this is the backend");
});

app.get("/jokes", (req, res) => {
  const q = "SELECT * FROM jokes";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/jokes", (req, res) => {
  const q = "INSERT INTO jokes(`line1`, `line2`) VALUES (?)";
  const values = [req.body.line1, req.body.line2];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.delete("/jokes/:id", (req, res) => {
  const jokeId = req.params.id;
  const q = "DELETE FROM jokes WHERE id = ?";

  db.query(q, [jokeId], (err, data) => {
    if (err) return res.json(err);
    return res.json("joke has been deleted successfully");
  });
});

app.put("/jokes/:id", (req, res) => {
  const jokeId = req.params.id;
  const q = "UPDATE jokes SET `line1` = ?, `line2` = ? WHERE id = ?";

  const values = [req.body.line1, req.body.line2];

  db.query(q, [...values, jokeId], (err, data) => {
    if (err) return res.json(err);
    return res.json("joke has been updated successfully");
  });
});

// Serve frontend

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}

app.listen(port, () => console.log(`Server started on port ${port}`));





