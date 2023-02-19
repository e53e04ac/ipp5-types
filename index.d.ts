/*!
    @e53e04ac/ipp5-types/index.d.ts
    Copyright (C) @e53e04ac
    MIT License
*/

export declare type Unreadonly<T> = { -readonly [P in keyof T]: T[P]; };

export declare type Ipp5BackendApiEnvMap = {
    readonly TZ: string;
    readonly WEBSITES_PORT: number;
    readonly CUSTOM_BACKEND_API_URN: string;
    readonly CUSTOM_BACKEND_API_HTTP_PATH_PREFIX: string;
    readonly CUSTOM_CONTAINER_BACKEND_MOUNT_PATH: string;
    readonly CUSTOM_BACKEND_IDP_TOKEN_URN: string;
    readonly CUSTOM_BACKEND_IDP_TOKEN_PUBLIC_KEY: string;
    readonly CUSTOM_EXPRESS_ENV: 'production' | 'development';
    readonly CUSTOM_EXPRESS_SUBDOMAIN_OFFSET: number;
    readonly CUSTOM_EXPRESS_TRUST_PROXY: string;
};

export declare type Ipp5BackendBatchEnvMap = {
    readonly TZ: string;
    readonly WEBSITES_PORT: number;
    readonly CUSTOM_BACKEND_BATCH_URN: string;
    readonly CUSTOM_BACKEND_BATCH_HTTP_PATH_PREFIX: string;
    readonly CUSTOM_CONTAINER_BACKEND_MOUNT_PATH: string;
    readonly CUSTOM_CONTAINER_BACKEND_BATCH_MOUNT_PATH: string;
    readonly CUSTOM_BACKEND_BATCH_VAULT_NAME: string;
    readonly CUSTOM_BACKEND_BATCH_ADLIBITUM_CLIENT_URN: string;
    readonly CUSTOM_BACKEND_BATCH_ADLIBITUM_SERVER_URN: string;
    readonly CUSTOM_BACKEND_BATCH_ADLIBITUM_CLIENT_PUBLIC_KEY: string;
    readonly CUSTOM_EXPRESS_ENV: 'production' | 'development';
    readonly CUSTOM_EXPRESS_SUBDOMAIN_OFFSET: number;
    readonly CUSTOM_EXPRESS_TRUST_PROXY: string;
};

export declare type Ipp5BackendIdpEnvMap = {
    readonly TZ: string;
    readonly WEBSITES_PORT: number;
    readonly CUSTOM_BACKEND_IDP_HTTP_PATH_PREFIX: string;
    readonly CUSTOM_BACKEND_IDP_REGISTER_URN: string;
    readonly CUSTOM_BACKEND_IDP_REGISTER_PRIVATE_KEY: string;
    readonly CUSTOM_BACKEND_IDP_REGISTER_PUBLIC_KEY: string;
    readonly CUSTOM_BACKEND_IDP_CHALLENGE_TOKEN_URN: string;
    readonly CUSTOM_BACKEND_IDP_CHALLENGE_TOKEN_PRIVATE_KEY: string;
    readonly CUSTOM_BACKEND_IDP_CHALLENGE_TOKEN_PUBLIC_KEY: string;
    readonly CUSTOM_BACKEND_IDP_TOKEN_URN: string;
    readonly CUSTOM_BACKEND_IDP_TOKEN_PRIVATE_KEY: string;
    readonly CUSTOM_BACKEND_IDP_STORAGE_ACCOUNT_NAME: string;
    readonly CUSTOM_BACKEND_API_URN: string;
    readonly CUSTOM_EXPRESS_ENV: 'production' | 'development';
    readonly CUSTOM_EXPRESS_SUBDOMAIN_OFFSET: number;
    readonly CUSTOM_EXPRESS_TRUST_PROXY: string;
};

export declare type Ipp5BackendStaticEnvMap = {
    readonly TZ: string;
    readonly WEBSITES_PORT: number;
    readonly CUSTOM_BACKEND_STATIC_HTTP_PATH_PREFIX: string;
    readonly CUSTOM_CONTAINER_DOCUMENT_ROOT_DIRECTORY_PATH: string;
    readonly CUSTOM_EXPRESS_ENV: 'production' | 'development';
    readonly CUSTOM_EXPRESS_SUBDOMAIN_OFFSET: number;
    readonly CUSTOM_EXPRESS_TRUST_PROXY: string;
};

export declare type Ipp5FrontendEnvMap = {
    readonly TZ: string;
    readonly WEBSITES_PORT: number;
};

export declare type Ipp5SampleData<Value> = {
    type: string;
    timeRangeType: string;
    timeRangeStartDate: number;
    timeRangeEndDate: number;
    year?: number;
    month?: number;
    day?: number;
    hour?: number;
    minute?: number;
    second?: number;
    value: Value;
    metricUnit?: string;
    error?: Error;
    rawValue?: unknown;
};

export declare type Ipp5MenuData = {
    readonly error?: Error;
    readonly items: ({
        readonly type: string;
    } & ({
        readonly type: 'divider';
    } | {
        readonly type: 'header';
        readonly text: string;
    } | {
        readonly type: 'item';
        readonly icon: string;
        readonly text: string;
        readonly href: string;
    } | {
        readonly type: 'group';
        readonly text: string;
        readonly subitems: ({
            readonly type: string;
        } & ({
            readonly type: 'header';
            readonly text: string;
        } | {
            readonly type: 'item';
            readonly text: string;
            readonly href: string;
        }))[];
    }))[];
};

export declare type Ipp5YearlySummaryData = {
    readonly error?: Error;
    readonly year: number;
    readonly months: number[];
    readonly durationOfSunshine: {
        readonly monthlySamples: Ipp5SampleData<number>[];
    };
    readonly monthlyPowerGenerationInThisYear: {
        readonly monthlySamples: Ipp5SampleData<number>[];
    };
    readonly monthlyPowerGenerationGainRatio: {
        readonly monthlySamples: Ipp5SampleData<number>[];
    };
    readonly plants: {
        readonly index: number;
        readonly name: string;
        readonly monthlySamples: Ipp5SampleData<number>[];
    }[];
};

export declare type Ipp5MonthlySummaryData = {
    readonly error?: Error;
    readonly year: number;
    readonly month: number;
    readonly days: number[];
    readonly weatherIcon: {
        readonly dailySamples: Ipp5SampleData<string>[];
    };
    readonly weatherDescription: {
        readonly dailySamples: Ipp5SampleData<string>[];
    };
    readonly averageTemperture: {
        readonly dailySamples: Ipp5SampleData<number>[];
    };
    readonly durationOfSunshine: {
        readonly dailySamples: Ipp5SampleData<number>[];
    };
    readonly plants: {
        readonly index: number;
        readonly name: string;
        readonly dailySamples: Ipp5SampleData<number>[];
    }[];
};

export declare type Ipp5DailySummaryData = {
    readonly error?: Error;
    readonly year: number;
    readonly month: number;
    readonly day: number;
    readonly dailyPowerGeneration: {
        readonly dailySample: Ipp5SampleData<number>;
    };
    readonly monthlyPowerGeneration: {
        readonly monthlySample: Ipp5SampleData<number>;
    };
    readonly averageTemperture: {
        readonly dailySample: Ipp5SampleData<number>;
    };
    readonly durationOfSunshine: {
        readonly dailySample: Ipp5SampleData<number>;
    };
    readonly weatherIcon: {
        readonly dailySample: Ipp5SampleData<string>;
    };
    readonly greenCount: number;
    readonly yellowCount: number;
    readonly redCount: number;
    readonly plants: {
        readonly index: number;
        readonly name: string;
        readonly red: boolean;
        readonly yellow: boolean;
        readonly green: boolean;
        readonly hourlySamples: Ipp5SampleData<number>[];
        readonly dailySamples: Ipp5SampleData<number>[];
        readonly dailySample: Ipp5SampleData<number>;
    }[];
};
