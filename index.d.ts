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
