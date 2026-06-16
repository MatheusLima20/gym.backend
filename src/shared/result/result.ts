import { AppError } from "../errors/app.error";

export type SuccessResult<T> = {
    success: true;
    data: T;
};

export type FailureResult<E = AppError> = {
    success: false;
    error: E;
};

export type Result<T, E = AppError> = SuccessResult<T> | FailureResult<E>;
