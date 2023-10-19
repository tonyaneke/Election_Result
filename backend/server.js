import express from "express";
import cors from "cors";
import {
  getLgaData,
  getPoll,
  getPollingUnits,
  getPolls,
  getPolling,
} from "./database.js";

const app = express();
app.use(express.json());

app.use(cors());

app.get("/polls", async (req, res) => {
  const polls = await getPolls();
  res.send(polls);
});

app.get("/polls/:id", async (req, res) => {
  const id = req.params.id;
  const poll = await getPoll(id);
  res.status(200).send(poll);
});

app.get("/lgas", async (req, res) => {
  const lgaData = await getLgaData();
  res.send(lgaData);
});

app.get("/polling/:id", async (req, res) => {
  const id = req.params.id;
  const pu_id = await getPollingUnits(id);
  res.send(pu_id);
});

app.get("/polling", async (req, res) => {
  const pu_id = await getPolling();
  res.send(pu_id);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
