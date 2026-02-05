import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface UploadedFile {
    url: string;
    name: string;
    description: string;
}
export interface backendInterface {
    addCV(url: string): Promise<void>;
    addFile(name: string, url: string, description: string): Promise<void>;
    getAllFiles(): Promise<Array<UploadedFile>>;
    getFilesCount(): Promise<bigint>;
}
