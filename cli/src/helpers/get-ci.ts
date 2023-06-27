import inquirer from "inquirer";

export const getCi = async () => {
    const { ci } = await inquirer.prompt([
        {
            type: "checkbox",
            name: "ci",
            message: "Select CI",
            choices: ["Github Actions", "Gitlab CI"],
        },
    ]);
    return ci;
};
