export interface UploaderConfig {
    mimeFilters: string[];
}

export interface IUploadFactory {
    getUploader(type: UploaderConfig): void;
}

export interface IUploadStrategy {
    uploadFile(
        entity: string,
        id: string,
        file: Buffer,
        fileType: string,
        acl?: string,
    ): Promise<UploaderRep>;
    deleteFile(entity: string, id: string): Promise<UploaderRep>;
}

export interface UploaderRep {
    url: string;
    bucket_name: string;
    folder: string;
}
