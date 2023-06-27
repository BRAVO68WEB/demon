import { Request, Response } from "express";

import UserSerice from "../services/user.service";

const userSerice = new UserSerice();

export default class UserController extends UserSerice {
    constructor() {
        super();
    }

    public async create(req: Request, res: Response) {
        const { username, password, last_name, first_name, email } = req.body;
        const user = await userSerice.createUser({
            username,
            password,
            last_name,
            first_name,
            email,
        });
        res.json(user.insert_users_one);
    }

    public async view(req: Request, res: Response) {
        const { username } = req.params;
        const user = await userSerice.getUser(username);
        res.json(user.users[0]);
    }

    public async viewAll(req: Request, res: Response) {
        let { search } = req.query as {
            search: string;
        };
        if (!search) search = "";
        const users = await userSerice.getAllUsers(search);
        res.json(users.users);
    }

    public async update(req: Request, res: Response) {
        const { username } = req.params;
        const { last_name, first_name, email } = req.body;
        const user = await userSerice.updateUser(username, {
            last_name,
            first_name,
            email,
        });
        res.json(user.update_users[0]);
    }

    public async remove(req: Request, res: Response) {
        const { username } = req.params;
        const user = await userSerice.deleteUser(username);
        res.json(user.delete_users[0]);
    }
}
