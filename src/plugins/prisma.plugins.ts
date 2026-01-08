import Elysia from "elysia";
import { PrismaClient } from "../generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL
const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)
export const prisma = new PrismaClient({ adapter })

export const prismaPlugin = new Elysia({ name: "prisma" })
    .decorate("db", prisma)
    .onStop(async () => {
        await prisma.$disconnect()
        await pool.end()
    })