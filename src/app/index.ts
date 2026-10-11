import express from "express";
import type { Express } from "express";
import { authRouter } from "./Auth/routes.js";

export function createApplication(): Express {
    const app = express();

    //middlewares

    app.use(express.json())

    app.get("/", (req, res) => {
        return res.json({ message: "welcome to auth with TS" });
    });

    return app;
}
