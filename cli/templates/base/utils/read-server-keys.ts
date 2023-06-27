import shell from "shelljs";

export const serverPublicKey = (): string => {
    return shell.cat("keys/server.key.pub").stdout;
};

export const serverPrivateKey = (): string => {
    return shell.cat("keys/server.key").stdout;
};
