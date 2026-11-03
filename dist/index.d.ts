type Platform = 'payload' | 'next';
type ReportPackage = {
    ecosystem: 'npm';
    name: string;
    version: string;
};
type Manifest$1<P extends Platform = Platform> = {
    manifestVersion: 1;
    platform: {
        name: P;
        version: string;
    };
    packages: ReportPackage[];
};
type ManifestInput = {
    manifestVersion: number;
    platform: {
        name: string;
        version: string;
    };
    packages: {
        ecosystem: string;
        name: string;
        version: string;
    }[];
};
type Report$1<P extends Platform = Platform> = {
    contractVersion: 1;
    generatedAt: string;
    reporter: {
        name: string;
        version: string;
    };
    runtime: {
        name: 'node';
        version: string;
    };
    platform: {
        name: P;
        version: string;
    };
    packages: ReportPackage[];
};

type Manifest = Manifest$1<'next'>;
type Report = Report$1<'next'>;

type ReportHandlerOptions = {
    manifest: ManifestInput;
    token?: string;
};
declare function createReportHandler(options: ReportHandlerOptions): (request: Request) => Response;
declare const buildReport: (manifest: Manifest, now?: Date) => Report;

export { buildReport, createReportHandler };
export type { Manifest, ManifestInput, Report, ReportHandlerOptions, ReportPackage };
