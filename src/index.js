import config, { loadConfig } from "./config/index.js";
import { createServer as createServerHttp } from "http";
import Express from "express";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer, gql } from "apollo-server-core";

import fs from "fs";
import cors from "cors";
import Schema from "./schema/index.js";
import resolvers from "./resolver/index.js";

// load config from .env
loadConfig();

const app = Express();

app.use(cors());

let httpServer = createServerHttp(app);

const gqlServer = new ApolloServer({
  typeDefs: Schema,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

gqlServer.start().then(async ()=> {
    gqlServer.applyMiddleware({app});
    await new Promise((resolve) => httpServer.listen({ port: config.server.port }, resolve));

    console.log(
        `🚀 server ${config.server.name} http://localhost:${config.server.port}
        `
      );
})