import { default as client } from "../lib/mongo.ts";
import { GoGoDenoSchema } from "../types/schema.ts";

const db = client.database("portfolio");

export const deno = db.collection<GoGoDenoSchema>("gogo-deno");
