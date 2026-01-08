import fs from "fs"
import path from "path"
import bcrypt from "bcryptjs"
import { getChallengePath } from "./challengeLoader.services"

export async function verifyFlag(challengeId: string, input: string) {
    const base = getChallengePath(challengeId)
    if(!base) return false

    const flagPath = path.join(base, "flag.txt")
    if(!fs.existsSync(flagPath)) return false

    const hash = fs.readFileSync(flagPath, "utf-8").trim()
    return await bcrypt.compare(input, hash)
}

