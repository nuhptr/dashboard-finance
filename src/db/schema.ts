import { pgTable, text } from "drizzle-orm/pg-core"
import { createInsertSchema } from "drizzle-zod"

export const accounts = pgTable("accounts", {
    id: text("id").primaryKey(),
    plaidId: text("plaid_id"),
    name: text("name").notNull(),
    userId: text("user_id").notNull(),
})

// TODO: Schema for inserting an account - can be used to validate API requests
export const insertAccountSchema = createInsertSchema(accounts)
