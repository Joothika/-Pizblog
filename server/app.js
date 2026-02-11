import express from "express";
import server from "./server.js";
import { dbConnection } from "./config.js/db.js";

const port = process.env.PORT || 3500;

await dbConnection();
server.listen(port, () => {
  console.log("server running on port", port);
});
