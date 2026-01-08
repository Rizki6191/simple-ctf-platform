import { error } from "console"
import path from "path"

export function safeJoin(base: string, target: string) {
    const resolved = path.resolve(base, target)
    if(!resolved.startsWith(base)) {
        throw new Error("Path traversal detected")
    }
    return resolved
}