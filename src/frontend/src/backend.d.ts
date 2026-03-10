import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export class ExternalBlob {
    getBytes(): Promise<Uint8Array<ArrayBuffer>>;
    getDirectURL(): string;
    static fromURL(url: string): ExternalBlob;
    static fromBytes(blob: Uint8Array<ArrayBuffer>): ExternalBlob;
    withUploadProgress(onProgress: (percentage: number) => void): ExternalBlob;
}
export interface ReligiousPractice {
    id: bigint;
    associatedDeity: string;
    ritualType: string;
    name: string;
    description: string;
    tradition: string;
    image: ExternalBlob;
}
export interface backendInterface {
    addPractice(name: string, description: string, ritualType: string, image: ExternalBlob, associatedDeity: string, tradition: string): Promise<void>;
    getAllPractices(): Promise<Array<ReligiousPractice>>;
    getPracticeById(id: bigint): Promise<ReligiousPractice | null>;
    getPracticesByDeity(deity: string): Promise<Array<ReligiousPractice>>;
    getPracticesByRitualType(ritualType: string): Promise<Array<ReligiousPractice>>;
    getPracticesByTradition(tradition: string): Promise<Array<ReligiousPractice>>;
}
