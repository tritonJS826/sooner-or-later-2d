import WebSocket from "ws";
import onConnect from "./OnConnect";
import express from "express";
import { HostsService } from "./HostsService";
import cors from "cors";
import bodyParser from "body-parser";


const app = express();
app.use(cors());
app.use(bodyParser()); //deprecated
export const hostService = new HostsService();

const expressPort = 5499;

app.listen(expressPort, () => {
  console.log(`Express example  listening at http://localhost:${expressPort}`);
});

app.post("/create-host", (req, res, next) => {
  const { host, port } = hostService.createHost({
    hostName: req.body.hostName,
    worldId: req.body.worldId,
    maxPlayers: req.body.maxPlayers,
    levelId: req.body.levelId,
  });

  // its port for game and for pre game page
  res.status(200).send(JSON.stringify({ host, port }));
});

app.delete("/host", (req, res, next) => {
  console.log('host deleted', req.body);

  hostService.removeHostById(req.body.hostId);
});

const port = 5002;

const wsServer = new WebSocket.Server({ port });
console.log(`LWSS running on port${port}`);


wsServer.on("connection", onConnect);

export default wsServer;
