import express from "express";
import cors from "cors";
import { db } from "./connect.js";

const app = express();
const PORT = 3000;

app.use(cors());
// app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/artists", async (req, res) => {
  const artists = await db.collection("artists").find({}).toArray();
  res.send(artists);
});

app.get("/songs", async (req, res) => {
  const songs = await db.collection("songs").find({}).toArray();
  res.send(songs);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
