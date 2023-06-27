#!/usr/bin/env node

import { clear } from "node:console";

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const main = async () => {
    clear();
    console.log("Welcome to the Create Demon APP CLI");
    await sleep(1000);
    console.log("This CLI will help you create a new Demon APP");
};

process.on("SIGINT", () => {
    console.log("Caught interrupt signal");
});

process.on("exit", () => {
    console.log("Exiting...");
});

process.on("uncaughtException", error => {
    console.error("Uncaught exception:", error);
});

await main().catch(error => {
    console.error("Aborting installation...");
    if (error instanceof Error) {
        console.error(error);
    } else {
        console.error(
            "An unknown error has occurred. Please open an issue on github with the below:",
        );
        console.log(error);
    }
    process.exit(1);
});
