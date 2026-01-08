import { Elysia } from "elysia"
import { prismaPlugin } from "./plugins/prisma.plugins"
import { challengeRoutes } from "./routes/challenges.routes"
import { submitRoutes } from "./routes/submit.routes"
import { scoreboardRoutes } from "./routes/scoreboard.routes"
import { viewRoutes } from "./routes/view"

export const app = new Elysia()
  .use(prismaPlugin)
  .use(viewRoutes)        // ← view HTML
  .use(challengeRoutes)   // ← REST API
  .use(submitRoutes)
  .use(scoreboardRoutes)
