export abstract class AppError extends Error {
    constructor(message: string) {
        super(message);
    }
}

export type AppErrorClass<E extends AppError = AppError> = new (
    ...args: any[]
) => E;
