export declare type DownloadOptions = {
    md5?: boolean;
    headers?: {
        [name: string]: string;
    };
};
export declare type DownloadResult = {
    uri: string;
    status: number;
    headers: {
        [name: string]: string;
    };
    md5?: string;
};
export declare type DownloadProgressCallback = (data: DownloadProgressData) => void;
export declare type DownloadProgressData = {
    totalBytesWritten: number;
    totalBytesExpectedToWrite: number;
};
export declare type DownloadPauseState = {
    url: string;
    fileUri: string;
    options: DownloadOptions;
    resumeData?: string;
};
export declare type FileInfo = {
    exists: true;
    uri: string;
    size: number;
    isDirectory: boolean;
    modificationTime: number;
    md5?: string;
} | {
    exists: false;
    uri: string;
    size: undefined;
    isDirectory: false;
    modificationTime: undefined;
    md5: undefined;
};
export declare enum EncodingType {
    UTF8 = "utf8",
    Base64 = "base64"
}
export declare type ReadingOptions = {
    encoding?: EncodingType | 'utf8' | 'base64';
    position?: number;
    length?: number;
};
export declare type WritingOptions = {
    encoding?: EncodingType | 'utf8' | 'base64';
};
export declare type ProgressEvent = {
    uuid: string;
    data: {
        totalBytesWritten: number;
        totalBytesExpectedToWrite: number;
    };
};
