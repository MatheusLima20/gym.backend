import { FailureResult } from "./failure.result";
import { SuccessResult } from "./success.result";

export class ResultFactory {
    static success<T>(data: T) {
        return SuccessResult.create(data);
    }

    static failure<TError>(error: TError) {
        return FailureResult.create(error);
    }
}