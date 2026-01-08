import { Elysia } from "elysia";
import cors from "@elysiajs/cors";
import swagger from "@elysiajs/swagger";
import { loadChallenges } from "./services/challengeLoader.services";
import { app as main } from "./app";

loadChallenges()

const app = new Elysia()
  .use(cors({ origin: true, credentials: true }))
  .use(swagger({
    path: "/docs",
    documentation: {
      info: { title: "CTF-Platform", version: "1.0" }
    }
  }))
  .use(main)
  .listen(3000);

console.log(`Swagger UI: http://localhost:${app.server!.port}/docs`);
