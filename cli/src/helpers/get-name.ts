import fs from "node:fs";
import path from "node:path";

import inquirer from "inquirer";

const validateDir = (dir: string) => {
    if (fs.existsSync(dir)) {
        return "Directory already exists";
    }
    return true;
};

export const getNewProjectName = async () => {
    const { projectName } = await inquirer.prompt([
        {
            type: "input",
            name: "projectName",
            message: "What is the name of your new project?",
            default: "my-demon-api",
            validate: (input: string) => {
                validateDir(path.join(process.cwd(), input));
                if (!input.trim()) {
                    return "Please enter a project name";
                }
                return true;
            },
        },
    ]);

    return projectName;
};
