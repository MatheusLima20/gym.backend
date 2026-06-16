import { Result } from "./result";

export class FailureResult {
    static create<TError>(error: TError): Result<never, TError> {
        return {
            success: false,
            error,
        };
    }
}
