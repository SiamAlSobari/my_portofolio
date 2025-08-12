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
async function handleResponse(request: Request): Promise<Response> {
  const response = await app.handle(request);
  // Read the body once and create a new Response
  const body = await response.text();
  return new Response(body, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
  });
}

// GET
export const GET: RequestHandler = async ({ request }) => {
  return handleResponse(request);
};