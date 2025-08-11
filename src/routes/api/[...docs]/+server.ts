import swagger from "@elysiajs/swagger";
import type { RequestHandler } from "@sveltejs/kit";
import { Elysia, t } from "elysia";

// Buat instance Elysia dengan prefix '/api'
const app = new Elysia({ prefix: "/porto" })
  .use(swagger({
    path: "/docs",
  }))
  .get("/", () => {
    return { message: "Hello from GET /api/p" };
  })
  .get("/test", () => {
    return { message: "Hello from GET /api/test" };
  })
  .post("/", () => {
    return { message: "Hello from POST /api/p" };
  })

export const fallback: RequestHandler = ({ request }) => app.handle(request);
