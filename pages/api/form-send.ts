import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.ionos.co.uk",
  port: 587,
  secure: false,
  auth: {
    user: process.env.NODE_MAILER_EMAIL,
    pass: process.env.NODE_MAILER_PASSW,
  },
});

const sendSlackMsg = async (message) => {
  try {
    await axios.post(
      "https://hooks.slack.com/services/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",
      { text: message }
    );
  } catch (error) {
    console.error("Error sending message via Slack:", error);
  }
};

const sendNodeMailerMsg = async (message: string) => {
  try {
    await transporter.sendMail({
      from: `"Lukas Tech Web Inquiry" <${process.env.NODE_MAILER_EMAIL}>`,
      to: "luke@lukas-tech.com",
      subject: "Web Inquiry",
      text: message,
    });
  } catch (error) {
    console.error("Error sending message via Email:", error);
  }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const message = `
  New Inquiry from lukas-tech.com:
  Name: ${req.body.name}
  Email: ${req.body.email}
  Message: ${req.body.message}
`;
  try {
    await Promise.all([sendSlackMsg(message), sendNodeMailerMsg(message)]);
    const data = { status: 200, feedback: "Message sent!" };
    const json = JSON.stringify(data);
    res.setHeader("Content-Type", "application/json");
    return res.status(200).send(json);
  } catch (error) {
    const json = JSON.stringify({ error: "Sorry, something went wrong." });
    res.setHeader("Content-Type", "application/json");
    return res.status(500).send(json);
  }
};

export default handler;
