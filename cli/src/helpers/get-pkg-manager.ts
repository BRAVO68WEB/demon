import { execSync } from "node:child_process";

import inquirer from "inquirer";

const pkgmanager = ["npm", "yarn", "pnpm"];

const availablePkgManager = pkgmanager.filter(manager => {
    try {
        execSync(`${manager} --version`, { stdio: "ignore" });
        return true;
    } catch {
        return false;
    }
});

export const getPkgManager = async () => {
    const { pkgmanager } = await inquirer.prompt([
        {
            type: "list",
            name: "pkgmanager",
            message: "Select a package manager:",
            choices: availablePkgManager,
        },
    ]);
    return pkgmanager;
};
