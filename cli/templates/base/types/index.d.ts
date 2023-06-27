import { Request } from "express";
export interface PaginationType {
    page: number;
    limit: number;
    sort_order?: "asc" | "desc";
    sort_by?: string;
    filters?: { [k: string]: any };
}

export interface ModRequest extends Request {
    file: any;
    files: any;
    user: IAccessToken;
}

export interface UserMeta {
    ip: string;
    token: string;
    userID: string;
}

export interface FileData extends Express.Multer.File {
    newName: string;
}

export interface IAccessToken {
    id: string;
    username: string;
    token_type: "access_token";
}
