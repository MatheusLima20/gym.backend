export type Result<TData, TError = Error> =
    | {
          success: true;
          data: TData;
      }
    | {
          success: false;
          error: TError;
      };
