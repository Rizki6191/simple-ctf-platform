import fs from "fs"
import path from "path"
import { Challenge } from "../types/challenge.types"

const CHALLENGE_DIR = path.resolve("Challenge")
const cache = new Map<string, Challenge>()

export function loadChallenges() {
    cache.clear()

    const entries = fs.readdirSync(CHALLENGE_DIR, { withFileTypes: true })

    for (const entry of entries) {
        if (!entry.isDirectory()) continue

        const id = entry.name
        const metaPath = path.join(CHALLENGE_DIR, id, "meta.json")

        if (!fs.existsSync(metaPath)) continue

        const meta = JSON.parse(fs.readFileSync(metaPath, "utf-8"))
        cache.set(id, { id, meta })
    }
}

export function getChallenges() {
    return [...cache.values()].filter(c => c.meta.visible)
}

export function getChallenge(id: string) {
    return cache.get(id)
}

export function getChallengePath(id: string) {
    return cache.has(id) ? path.join(CHALLENGE_DIR, id) : null
}