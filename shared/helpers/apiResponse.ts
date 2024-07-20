import { NextResponse } from "next/server";
import { HTTP_STATUS_CODES } from "../constants/https";
import { IApiResponse } from "../types/apiResponse";

export class ApiResponser {
  static response(data: IApiResponse<any>): NextResponse {
    return NextResponse.json(
      {
        ...data,
        success:
          Number(data.statusCode) >= HTTP_STATUS_CODES.Success &&
          Number(data.statusCode) < HTTP_STATUS_CODES.MultipleChoices,
      },
      { status: data.statusCode }
    );
  }

  static ok(data: IApiResponse<any>) {
    return ApiResponser.response({
      ...data,
      statusCode: HTTP_STATUS_CODES.Success,
    });
  }

  static created(data: IApiResponse<any>) {
    return ApiResponser.response({
      ...data,
      statusCode: HTTP_STATUS_CODES.Created,
    });
  }

  static badRequest(data: IApiResponse<any>) {
    return ApiResponser.response({
      ...data,
      statusCode: HTTP_STATUS_CODES.BadRequest,
    });
  }

  static notFound(data: IApiResponse<any>) {
    return ApiResponser.response({
      ...data,
      statusCode: HTTP_STATUS_CODES.NotFound,
    });
  }

  static error(data: IApiResponse<any>) {
    return ApiResponser.response({
      ...data,
      statusCode: HTTP_STATUS_CODES.InternalServerError,
    });
  }

  static conflictRequest(data: IApiResponse<any>) {
    return ApiResponser.response({
      ...data,
      statusCode: HTTP_STATUS_CODES.Conflict,
    });
  }
}
