import { IBookingForm } from "../types/bookingInfo";

export const defineBookingMailHTML = ({
  email,
  first_name,
  last_name,
  phone_number,
  services,
  time_booking,
}: IBookingForm) => {
  return `
  <!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html dir="ltr" lang="en">

  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
  </head>


  <body
    style="background-color:#ffffff;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Roboto,Oxygen-Sans,Ubuntu,Cantarell,&quot;Helvetica Neue&quot;,sans-serif">
    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation"
      style="max-width:37.5em;margin:0;padding:20px 0 48px">
      <tr style="width:100%">
        <td>
          <h1 style="font-size:20px;line-height:26px;">Booking information:</h1>
          <p style="font-size:16px;line-height:26px;margin:16px 0">- Customer: <strong>${first_name} ${last_name}</strong></p>
          <p style="font-size:16px;line-height:26px;margin:16px 0">- Services: <strong>${services || ''}</strong></p>
          <p style="font-size:16px;line-height:26px;margin:16px 0">- Booking time: <strong>${time_booking}</strong></p>
          <p style="font-size:16px;line-height:26px;margin:16px 0">- Email: <strong>${email}</strong></p>
          <p style="font-size:16px;line-height:26px;margin:16px 0">- Phone number: <strong>${phone_number}</strong></p>
          <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#cccccc;margin:20px 0" />
        </td>
      </tr>
      </tbody>
    </table>
  </body>
  </html>
  `;
};
