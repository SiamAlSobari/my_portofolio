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

// GET
export const GET: RequestHandler = async ({ request }) => {
  return app.handle(request);
};

// POST
export const POST: RequestHandler = async ({ request }) => {
  return app.handle(request);
};

// PUT
export const PUT: RequestHandler = async ({ request }) => {
  return app.handle(request);
};

// DELETE
export const DELETE: RequestHandler = async ({ request }) => {
  return app.handle(request);
};
