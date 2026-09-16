// Mirrors DEVELOPMENT MATERIAL/DevLogix_Backend_API_Contract.md response shapes exactly, so the
// same client code works unchanged against the mock routes or the real backend.
export type ApiSuccess<T = Record<string, unknown>> = {
  success: true;
  message?: string;
  data: T;
};

export type ApiFailure = {
  success: false;
  message: string;
  errors?: Record<string, string[]>;
};

export type ApiResult<T = Record<string, unknown>> = ApiSuccess<T> | ApiFailure;
