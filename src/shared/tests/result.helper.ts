import { AppError } from "../errors/app.error";
import { Result } from "../result";

export function expectSuccess<T>(result: Result<T>): T {
    expect(result.success).toBe(true);

    if (!result.success) {
        throw result.error;
    }

    return result.data;
}

export function expectFailure<E extends AppError>(
    result: Result<unknown>,
    type: new (...args: any[]) => E,
): E {
    expect(result.success).toBe(false);

    if (result.success) {
        throw new Error("Expected failure, but got success.");
    }

    expect(result.error).toBeInstanceOf(type);

    return result.error as E;
}