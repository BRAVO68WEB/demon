#!/usr/bin/env node

import { clear } from "node:console";

import * as helpers from "./helpers";
import scafoldProject from "./scaffold";
import { welcome } from "./utils";
import * as utils from "./utils";

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const main = async () => {
    clear();
    await sleep(1000);
    welcome();
    const projectName = (await helpers.getNewProjectName()) as string;
    const ci = (await helpers.getCi()) as string[];
    const eslint = (await helpers.getLint()) as boolean;
    const prettier = (await helpers.getPrettier()) as boolean;
    (await helpers.gitInit(projectName)) as boolean;
    const packageManager = (await helpers.getPkgManager()) as string;
    const isInstallDependencies = (await utils.isInstallDependencies()) as boolean;
    await scafoldProject({
        projectName,
        ci,
        eslint,
        prettier,
    });
    if (isInstallDependencies) {
        utils.installDependencies(projectName, packageManager);
    } else {
        utils.nextSteps(projectName, packageManager, isInstallDependencies);
    }
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
