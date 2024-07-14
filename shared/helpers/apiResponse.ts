import { NextResponse } from "next/server";
import { HTTP_STATUS_CODES } from "../constants/httpStatus";
import { IApiResponse } from "../types/apiResponse";

export class ApiResponser {
  static response(data: IApiResponse<any>): NextResponse {
    return NextResponse.json(
      {
        ...data,
        success: data.statusCode >= HTTP_STATUS_CODES.Success && data.statusCode < HTTP_STATUS_CODES.MultipleChoices,
      },
      { status: data.statusCode }
    );
  }

  static ok(data: IApiResponse<any>) {
    return ApiResponser.response(data);
  }

  static created(data: IApiResponse<any>) {
    return ApiResponser.response(data);
  }

  static badRequest(data: IApiResponse<any>) {
    return ApiResponser.response(data);
  }

  static notFound(data: IApiResponse<any>) {
    return ApiResponser.response(data);
  }

  static error(data: IApiResponse<any>) {
    return ApiResponser.response(data);
  }

  static conflictRequest(data: IApiResponse<any>) {
    return ApiResponser.response(data);
  }
}
