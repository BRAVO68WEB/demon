import { Router } from "express";

import DevController from "../controllers/dev.controller";

const { devFunc } = new DevController();

const router = Router();

router.get("/", devFunc);

router.all("/err", async (req, res, next) => {
    try {
        throw new Error("This is an error");
    } catch (error) {
        console.log(error);
        next(error);
    }
});

export default router;
