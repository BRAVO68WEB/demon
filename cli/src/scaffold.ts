import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import chalk from "chalk";
import ora from "ora";

const __dirname = path.resolve();
const __filename = fileURLToPath(import.meta.url);
const distPath = path.dirname(__filename);
const PKG_ROOT = path.join(distPath, "../");

type Props = {
    projectName: string;
    ci: string[];
    eslint: boolean;
    prettier: boolean;
};

function scafoldProject({ projectName, ci, eslint, prettier }: Props) {
    fs.mkdirSync(path.join(__dirname, projectName));
    console.log("\n");
    const spinner = ora("Creating a new project...").start();
    copyBase(projectName);
    doextras(projectName, eslint, ci, prettier);
    spinner.succeed(chalk.greenBright("Successfully created a new project!\n"));
}

const copyBase = (projectName: string) => {
    const __TemplateDir = path.join(PKG_ROOT, "templates/base");
    const __ProjectDir = path.join(__dirname, projectName);
    for (const file of fs.readdirSync(__TemplateDir)) {
        fs.copyFileSync(path.join(__TemplateDir, file), path.join(__ProjectDir, file));
    }
};

const doextras = async (projectName: string, eslint: boolean, ci: string[], prettier: boolean) => {
    const __TemplateDir = path.join(PKG_ROOT, "templates/extras");
    const __ProjectDir = path.join(__dirname, projectName);
    fs.mkdirSync(path.join(__dirname, projectName, "database"));

    if (eslint) {
        fs.copyFileSync(
            path.join(__TemplateDir, "configs", ".eslintrc.yml"),
            path.join(__ProjectDir, ".eslintrc.yml"),
        );
    }

    if (prettier) {
        fs.copyFileSync(
            path.join(__TemplateDir, "configs", ".prettierrc"),
            path.join(__ProjectDir, ".prettierrc"),
        );
    }
    let i: number;
    let selectedci: string | undefined;
    for (i = 0; i < ci.length; i++) {
        selectedci = ci[i];
        if (selectedci === "Github Actions") {
            fs.mkdirSync(path.join(__ProjectDir, ".github"));
            fs.mkdirSync(path.join(__ProjectDir, ".github", "workflows"));
            fs.copyFileSync(
                path.join(__TemplateDir, "ci", ".github", "workflows", "build.yml"),
                path.join(__ProjectDir, ".github", "workflows", "build.yml"),
            );
        } else if (selectedci === "Gitlab CI") {
            fs.copyFileSync(
                path.join(__TemplateDir, "ci", ".gitlab-ci.yml"),
                path.join(__ProjectDir, ".gitlab-ci.yml"),
            );
        }
    }
};

export default scafoldProject;
