import fs from "node:fs";
import path from "node:path";

import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const __dirname = path.resolve();

const getpkg = async () => {
    const pkg = await fs.promises.readFile(path.join(__dirname, "package.json"), "utf8");
    return JSON.parse(pkg);
};

const pkgversion = async () => {
    const pkg = await getpkg();
    return pkg.version;
};

const pkgv = await pkgversion();

export async function welcome() {
    const title = chalkAnimation.pulse(
        figlet.textSync("   Demon  ", {
            font: "ANSI Regular",
            horizontalLayout: "fitted",
            verticalLayout: "fitted",
            width: 68,
        }),
    );
    title.start();
    console.log(chalk.green(" Demon CLI "));
    console.log(chalk.white(" Version: " + pkgv + "\n"));
    await sleep(500);
}
