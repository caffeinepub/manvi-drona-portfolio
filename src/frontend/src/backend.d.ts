import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Project {
    title: string;
    link: string;
    description: string;
}
export interface Resume {
    url: string;
    name: string;
}
export interface backendInterface {
    addProject(title: string, description: string, link: string): Promise<void>;
    addResume(name: string, url: string): Promise<void>;
    getAllProjects(): Promise<Array<Project>>;
    getProject(title: string): Promise<Project | null>;
    getResume(name: string): Promise<Resume | null>;
}
