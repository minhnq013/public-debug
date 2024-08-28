
    export type RemoteKeys = 'federation_provider/button' | 'federation_provider';
    type PackageType<T> = T extends 'federation_provider' ? typeof import('federation_provider') :T extends 'federation_provider/button' ? typeof import('federation_provider/button') :any;