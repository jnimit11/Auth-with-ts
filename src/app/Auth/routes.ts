import express from "express";
import type { Router } from "express";
import AuthenticationController from "./controller.js";

export const authRouter: Router = express.Router();

const authenticationController = new AuthenticationController();

authRouter.post("/sign-up", (req, res) => {
    return authenticationController.handleSignup.bind(authenticationController);
});