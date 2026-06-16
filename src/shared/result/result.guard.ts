// src/shared/result/result.guard.ts
import { Result, FailureResult } from "./result";

export function isFailure<T>(result: Result<T>): result is FailureResult {
  return result.success === false;
}