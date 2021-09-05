import WebSocket from "ws";
import onConnect from "./OnConnect";
import express from "express";
import { HostsService } from "./HostsService";
import cors from "cors";

const app = express();
app.use(cors());

const hostService = new HostsService();

const expressPort = 5499;

app.listen(expressPort, () => {
  console.log(`Example app listening at http://localhost:${expressPort}`);
});

app.post("/create-host", (req, res, next) => {
  console.log(req.body);
  const { host, port } = hostService.createHost({
    hostName: req.body.hostName,
    worldId: req.body.worldId,
    difficulty: req.body.difficulty,
    maxPlayers: req.body.maxPlayers,
    level: req.body.level,
  });

  // its port for game and for pre game page
  res.status(200).send(JSON.stringify({ host, port }));
});

const wsServer = new WebSocket.Server({ port: 5002 });

console.log("Server running on port 5002");

wsServer.on("connection", onConnect);

export default wsServer;
