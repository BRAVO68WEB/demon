import "dotenv/config";

import cors from "cors";
import express from "express";
import ratelimiter from "express-rate-limit";
import helmet from "helmet";
import morgan from "morgan";

import "./configs";

import { hgqlInit } from "./helpers";
import CacheClient, { CacheEnvironment } from "./helpers/cache.factory";
import { errorHandler, notFoundHandler } from "./libs";
import { logger, LogStream } from "./libs";
import pkg from "./package.json" assert { type: "json" };

export const app: express.Application = express();
logger.info("🚀 @" + pkg.author + "/" + pkg.name, "v" + pkg.version);

const isDev: boolean = process.env.NODE_ENV == "production";
logger.info(isDev ? "🚀 Production Mode" : "🚀 Development Mode");
const logStream = new LogStream();

logger.info(`🔑 Master Key ${process.env.MASTER_KEY}`);

import routes from "./routes";

hgqlInit();
CacheClient.init(process.env.CACHE_ENV as CacheEnvironment);

app.use(cors());
app.use(helmet());
app.use(
    morgan("combined", {
        stream: logStream,
    }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(
    ratelimiter({
        windowMs: 15 * 60 * 1000,
        max: 100,
    }),
);
app.set("trust proxy", 1);

app.use("/health", (req, res) => {
    return res.status(200).json({
        app: pkg.name,
        request_ip: req.ip,
        uptime: process.uptime(),
        hrtime: process.hrtime(),
    });
});

logger.info("🦄 Base Route /");

app.use("/", routes);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(process.env.PORT, async () => {
    logger.info(`🚂 Server running on port ${process.env.PORT}`);
});

export { logger } from "./libs";
