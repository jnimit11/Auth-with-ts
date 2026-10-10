import express  from "express";
import type { Express } from "express";

export function createApplication() {
    const app = express()

    //middlewares

    //Routes

    app.get("/", (req, res) => {
        return res.json({message: "welcome to auth with TS"})
    })

    return app
}
