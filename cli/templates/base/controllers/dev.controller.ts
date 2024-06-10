import { Request, Response } from "express";

import { makeResponse } from "../libs";
import DevClass from "../services/dev.service";

export default class DevController extends DevClass {
    public devFunc = async (req: Request, res: Response): Promise<any> => {
        try {
            const data = await this.devRun();
            res.send(makeResponse(data));
        } catch (error: any) {
            res.send(makeResponse(error.message, {}, "Failed", true));
        }
    };
}
