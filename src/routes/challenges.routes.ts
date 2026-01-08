import { Elysia } from "elysia"
import fs from "fs"
import path from "path"
import {
  getChallenges,
  getChallenge,
  getChallengePath
} from "../services/challengeLoader.services"
import { renderMarkdown } from "../utils/markdown.utils"

export const challengeRoutes = new Elysia()
  .get("/challenges", () =>
    getChallenges().map(c => ({
      id: c.id,
      ...c.meta
    }))
  )

  .get("/challenges/:id", ({ params }) => {
    const challenge = getChallenge(params.id)
    if (!challenge) throw new Error("Challenge not found")

    const base = getChallengePath(params.id)!
    const descPath = path.join(base, "description.md")

    const md = fs.readFileSync(descPath, "utf-8")

    return {
      id: challenge.id,
      ...challenge.meta,
      description: renderMarkdown(md)
    }
  })
