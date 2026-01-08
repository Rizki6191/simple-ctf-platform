import { Elysia } from "elysia"
import { verifyFlag } from "../services/flagService.services"
import { prismaPlugin } from "../plugins/prisma.plugins"

export const submitRoutes = new Elysia()
    .use(prismaPlugin)
    .post("/challenges/:id/submit", async ({ params, body, db, user }) => {
        const { flag } = body as { flag: string }

        const solved = await db.submission.findUnique({
            where: {
                userId_challengeId: {
                    userId: user.id,
                    challengeId: params.id
                }
            }
        })

        if (solved) {
            return { message: "Already solved" }
        }

        const correct = await verifyFlag(params.id, flag)

        await db.submission.create({
            data: {
                userId: user.id,
                challengeId: params.id,
                submittedFlag: flag,
                isCorrect: correct
            }
        })

        return { correct }
    })
