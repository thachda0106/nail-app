const nodemailer = require('nodemailer');

export class MailSender {
  static getTransport() {
    return nodemailer.createTransport({
      host: process.env.MAIL_SERVER_HOST,
      port: process.env.MAIL_SERVER_PORT,
      secure: false,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  }


  async sendMail(mail: any): Promise<unknown> {
    return await MailSender.getTransport().sendMail(mail);
  }
}
