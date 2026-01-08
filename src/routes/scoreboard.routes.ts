import { Elysia } from "elysia"
import { prismaPlugin } from "../plugins/prisma.plugins"

export const scoreboardRoutes = new Elysia()
    .use(prismaPlugin)
    .get("/scoreboard", async ({ db }) => {
        return db.submission.groupBy({
            by: ["userId"],
            where: { isCorrect: true },
            _count: { challengeId: true }
        })
    })
