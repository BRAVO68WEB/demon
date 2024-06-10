import { NextFunction, Response } from "express";
import Joi from "joi";

import { ErrorMsg } from "../interfaces/message.enums";
import { CustomError } from "../libs/error";
import { ModRequest } from "../types";

export const createUserValidation = async (req: ModRequest, res: Response, next: NextFunction) => {
    try {
        const schema = Joi.object().keys({
            username: Joi.string().required(),
            password: Joi.string().required(),
            first_name: Joi.string().required(),
            last_name: Joi.string().required(),
            email: Joi.string().required(),
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

export const updateUserValidation = async (req: ModRequest, res: Response, next: NextFunction) => {
    try {
        const schema = Joi.object().keys({
            username: Joi.string().required(),
            first_name: Joi.string().required(),
            last_name: Joi.string().required(),
            email: Joi.string().required(),
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

export const listUserValidation = async (req: ModRequest, res: Response, next: NextFunction) => {
    try {
        const schema = Joi.object().keys({
            search: Joi.string().optional(),
        });
        req.query = await schema.validateAsync(req.query);
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
