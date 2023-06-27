import type { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";

import { IAccessToken, ModRequest } from "../types";
import { serverPrivateKey, serverPublicKey } from "../utils/read-server-keys";

export default class AuthService {
    public async generateAccessTokenS(id: string, username: string) {
        const privateKey = await serverPrivateKey();
        return jwt.sign(
            {
                id,
                username,
                token_type: "access_token",
            },
            privateKey,
            {
                algorithm: "RS256",
                expiresIn: "15d",
            },
        );
    }

    public async verifyAccessTokenS(token: string) {
        const publicKey = await serverPublicKey();
        const decoded = (await jwt.verify(token, publicKey, {
            algorithms: ["RS256"],
        })) as IAccessToken;
        if (decoded.token_type === "access_token") {
            return decoded;
        }
        return null;
    }

    public async generateTokensS(id: string, username: string) {
        const accessToken = await this.generateAccessTokenS(id, username);
        return {
            accessToken,
        };
    }

    public mid() {
        return async (req: ModRequest, res: Response, next: NextFunction) => {
            const authHeader = req.headers.authorization;
            if (authHeader) {
                const token = authHeader.split(" ")[1];
                const decoded = await this.verifyAccessTokenS(token);
                if (decoded) {
                    req.user = decoded;
                    next();
                } else {
                    res.json({
                        error: "Invalid token",
                    });
                }
            } else {
                res.json({
                    error: "No token",
                });
            }
        };
    }
}
