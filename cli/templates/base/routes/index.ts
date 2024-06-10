import { Router } from "express";

import DevRoutes from "./dev.routes";
import UsersRoutes from "./users.routes";

const router = Router();

router.use("/dev", DevRoutes);
router.use("/users", UsersRoutes);

export default router;
