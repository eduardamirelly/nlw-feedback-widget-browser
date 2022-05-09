import nodemailer from 'nodemailer';

import { MailAdapter, SendMailData } from "../mail-adapter";

console.log();

const transport = nodemailer.createTransport({
	host: process.env.MAIL_HOST || "",
	port: 2525,
	auth: {
		user: process.env.MAIL_USER || "",
		pass: process.env.MAIL_PASSWORD || ""
	}
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Eduarda Mirelly <mirelly.eduarda404@gmail.com>',
      subject,
      html: body,
    });
  }
}