import { Router } from "express";

import UserController from "../controllers/user.controller";

const userController = new UserController();

const router = Router();

router.post("/", userController.create);
router.get("/", userController.viewAll);
router.get("/:username", userController.view);
router.put("/:username", userController.update);
router.delete("/:username", userController.remove);

router.all("/err", async (req, res, next) => {
    try {
        throw new Error("This is an error");
    } catch (error) {
        console.log(error);
        next(error);
    }
});

export default router;
