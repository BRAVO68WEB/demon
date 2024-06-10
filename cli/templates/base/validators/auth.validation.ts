import { NextFunction, Response } from "express";
import Joi from "joi";

import { ErrorMsg } from "../interfaces/message.enums";
import { CustomError } from "../libs/error";
import { ModRequest } from "../types";

export const authValidation = async (req: ModRequest, res: Response, next: NextFunction) => {
    try {
        const schema = Joi.object().keys({
            username: Joi.string().required(),
            password: Joi.string().required(),
        });
        req.body = await schema.validateAsync(req.body);
        next();
    } catch (error) {
        res.status(400).send(
            new CustomError({
                data: error,
                message: ErrorMsg.VALIDATION,
                statusCode: 400,
            }),
        );
        return;
    }
};
