export {};

export interface AuthUser {
    uid: string;
    platformUID: string;
}

export interface RequestAuth {
    user?: AuthUser;
}

declare global {
    namespace Express {
        interface Request {
            auth: RequestAuth;
        }
    }
}