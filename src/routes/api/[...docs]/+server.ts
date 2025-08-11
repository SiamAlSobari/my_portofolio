import swagger from "@elysiajs/swagger";
import type { RequestHandler } from "@sveltejs/kit";
import { Elysia, t } from "elysia";
import { about } from "../../../data/about";
import { skills } from "../../../data/skills";
import { contact } from "../../../data/contact";

// Buat instance Elysia dengan prefix '/api'
const app = new Elysia({ prefix: "/api" })
  .use(
    swagger({
      path: "/docs",
      documentation:{
        info: {
          title: "Porto API SIAM AL SOBARI",
          description: "Yappingan siam al sobari yang sangat ganteng",
          version: "1.0.0",
        }
      }
    })
  )
  .get("/about", () => about)
  .get("/skills", () => skills)
  .get("/contact", () => contact);

export const fallback: RequestHandler = ({ request }) => app.handle(request);
