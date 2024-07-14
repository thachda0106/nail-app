import { HTTP_STATUS_CODES } from "@/shared/constants/httpStatus";
import { defineBookingMailHTML } from "@/shared/utils/mailTemplates";
import { ApiResponser } from "@/shared/helpers/apiResponse";
import { MailSender } from "@/shared/helpers/mailSender";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // TODO for validate user information
    const mailSender = new MailSender();

    const info = await mailSender.sendMail({
      from: "<thachbovjp@gmail.com>",
      to: "thachda010600@gmail.com",
      subject: "BOOKING TIME",
      text: "I want to book an appointment for a manicure.",
      html: defineBookingMailHTML({ username: 'Thach Stone', phoneNumber: '0906303704', bookingTime: '04:00 PM 07/01/2024'}),
    });

    return ApiResponser.ok({
      statusCode: HTTP_STATUS_CODES.Success,
      data: info,
      message: "Booking successfully.",
    });
  } catch (error: any) {
    return ApiResponser.error({
      statusCode: HTTP_STATUS_CODES.InternalServerError,
      message: error?.message || "",
    });
  }
}
