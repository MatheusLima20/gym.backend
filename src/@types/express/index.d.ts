export { };
export interface User {
    id: number;
    name: string;
    email: string;
    userType: string;
    platform: {
        id: number,
        name: string
    },
}

export interface RequestAuth {
    user: User;
}

declare global {
    namespace Express {
        interface Request {
            auth: RequestAuth;
        }
    }
}