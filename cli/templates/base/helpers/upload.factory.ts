import path from "node:path";

import multer from "multer";

import { IUploadFactory, UploaderConfig } from "../interfaces/upload.interface";
import { FileData } from "../types";

export class UploadFactory implements IUploadFactory {
    public getUploader(config?: UploaderConfig): any {
        const storage = multer.memoryStorage();

        return multer({
            storage: storage,
            fileFilter: (req, file: FileData, cb) => {
                file.originalname = file.originalname.replaceAll(/\s/g, "_");
                const fileName =
                    file.originalname.split(".")[file.originalname.split(".").length - 2] +
                    "-" +
                    Date.now() +
                    path.extname(file.originalname);
                file.newName = fileName;
                if (config?.mimeFilters?.length) {
                    if (config.mimeFilters.includes(file.mimetype)) {
                        cb(null, true);
                    } else {
                        cb(null, false);
                    }
                } else {
                    cb(null, true);
                }
            },
        });
    }
}
