import { Result } from "./result";

export class SuccessResult {
    static create<T>(data: T): Result<T> {
        return {
            success: true,
            data,
        };
    }
}
