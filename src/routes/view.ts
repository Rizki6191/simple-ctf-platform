import { Elysia } from "elysia"
import fs from "fs"
import path from "path"
import {
  getChallenges,
  getChallenge,
  getChallengePath
} from "../services/challengeLoader.services"
import { renderMarkdown } from "../utils/markdown.utils"
import { homeView } from "../views/home"
import { challengeListView } from "../views/challengeList"
import { challengeDetailView } from "../views/challengeDetail"

export const viewRoutes = new Elysia()
  .get("/", () => new Response(homeView(), {
    headers: { "Content-Type": "text/html" }
  }))

  .get("/view/challenges", () => {
    const challenges = getChallenges()
    return new Response(
      challengeListView(challenges),
      { headers: { "Content-Type": "text/html" } }
    )
  })

  .get("/view/challenges/:id", ({ params }) => {
    const challenge = getChallenge(params.id)
    if (!challenge) return new Response("Not found", { status: 404 })

    const base = getChallengePath(params.id)!
    const md = fs.readFileSync(path.join(base, "description.md"), "utf-8")

    return new Response(
      challengeDetailView({
        id: challenge.id,
        title: challenge.meta.title,
        points: challenge.meta.points,
        description: renderMarkdown(md)
      }),
      { headers: { "Content-Type": "text/html" } } 
    )
  })
