export const defineBookingMailHTML = ({ username, bookingTime, phoneNumber }: Record<string, string>) => {
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
          <h1 style="font-size:20px;line-height:26px;">I want to book an appointment for a manicure.</h1>
          <p style="font-size:16px;line-height:26px;margin:16px 0">- Name: <strong>${username}</strong></p>
          <p style="font-size:16px;line-height:26px;margin:16px 0">- Phone number: <strong>${phoneNumber}</strong></p>
          <p style="font-size:16px;line-height:26px;margin:16px 0">- Booking time: <strong>${bookingTime}</strong></p>
          <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#cccccc;margin:20px 0" />
        </td>
      </tr>
      </tbody>
    </table>
  </body>
  </html>
  `;
};
