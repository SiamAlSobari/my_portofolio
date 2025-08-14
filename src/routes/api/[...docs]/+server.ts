import type { RequestHandler } from "@sveltejs/kit";
import { Elysia } from "elysia";
import swagger from "@elysiajs/swagger";
import { about } from "../../../data/about";
import { skills } from "../../../data/skills";
import { contact } from "../../../data/contact";

// Instance Elysia
const app = new Elysia({ prefix: "/api" })
  .use(
    swagger({
      path: "/docs",
      documentation: {
        info: {
          title: "Porto API SIAM AL SOBARI",
          description: "Yappingan siam al sobari yang sangat ganteng",
          version: "1.0.0",
        },
      },
    })
  )
  .get("/about", () => about)
  .get("/skills", () => skills)
  .get("/contact", () => contact);

// Helper function to handle response
export const GET: RequestHandler = async ({ request }) => {
  // Clone isi body dari request supaya fresh
  const body = request.body ? await request.text() : null;

  const freshRequest = new Request(request.url, {
    method: request.method,
    headers: request.headers,
    body: body,
  });

  return app.handle(freshRequest);
};
