export interface IApiError {
  code: string;
  message: string;
}

export interface IApiResponse<T> {
  statusCode: number;
  success?: boolean;
  message?: string;
  data?: T;
  error?: IApiError;
}
