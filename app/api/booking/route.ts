import { BookingSchema } from "@shared/schema/booking.schema";
import { defineBookingMailHTML } from "@/shared/utils/mailTemplates";
import { ApiResponser } from "@/shared/helpers/apiResponse";
import { MailSender } from "@/shared/helpers/mailSender";
import { NextRequest } from "next/server";
import { IBookingForm } from "@/shared/types/bookingInfo";
import { HTTP_STATUS_CODES } from "@/shared/constants/https";

export async function POST(request: NextRequest) {
  try {
    const bookingInfo = await request.json();
    const isValidData = await BookingSchema.validateSync(bookingInfo);

    if (!isValidData) {
      return ApiResponser.badRequest({
        statusCode: HTTP_STATUS_CODES.BadRequest,
        message: "Invalid booking data.",
      });
    }

    const mailSender = new MailSender();

    await Promise.all([
      mailSender.sendMail({
        from: `<${bookingInfo.email}>`,
        to: `${process.env.MAIL_USERNAME}`,
        subject: "BOOKING TIME",
        text: "The customer want to book an appointment for a manicure.",
        html: defineBookingMailHTML((bookingInfo as unknown) as IBookingForm),
      }),
      mailSender.sendMail({
        from: `<${process.env.MAIL_USERNAME}>`,
        to: `${bookingInfo.email}`,
        subject: "BOOKING INFORMATION",
        text: "You Just booked an appointment for a manicure.",
        html: defineBookingMailHTML((bookingInfo as unknown) as IBookingForm),
      })
    ])

    return ApiResponser.ok({
      statusCode: HTTP_STATUS_CODES.Success,
      message: "Booking successfully.",
    });
  } catch (error: any) {
    return ApiResponser.error({
      statusCode: HTTP_STATUS_CODES.InternalServerError,
      message: error?.message || "",
    });
  }
}
