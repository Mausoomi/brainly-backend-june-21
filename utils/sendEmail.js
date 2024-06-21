const nodemailer = require("nodemailer");

exports.sendmail = async function (req, user) {
  try {
    // Generate an OTP using otp-generator

    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: "no-reply@brainylingo.co.uk",
        pass: "BrainyPa$$code",
      },
    });

    const mailOptions = {
      from: "no-reply@brainylingo.co.uk",
      to: "dev23.mxpertz@gmail.com",
      subject: "HII",
      text: `HII`,
    };

    await transporter.sendMail(mailOptions);
    console.log("OTP sent to:");
  } catch (error) {
    console.error("OTP Send Error:", error);
    throw error;
  }
};




exports.sendmail_Partner_us = async function (Email, subject, message) {
  try {
    // Generate an OTP using otp-generator

    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: "no-reply@brainylingo.co.uk",
        pass: "BrainyPa$$code",
      },
    });

    const mailOptions = {
      from: "no-reply@brainylingo.co.uk",
      to: "c.achyuthreddy@gmail.com",
      // to: "dev23.mxpertz@gmail.com",
      subject: subject,
      text: `This is the Message - ${message} from this Email - ${Email}`,
    };

    await transporter.sendMail(mailOptions);
    console.log("Partner us Email sended Successfully");
  } catch (error) {
    console.error("OTP Send Error:", error);
    throw error;
  }
};


exports.sendmail_For_WeeklyPerformace_On_Sunday = async function (Email, message) {
  try {
    // Generate an OTP using otp-generator

    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: "no-reply@brainylingo.co.uk",
        pass: "BrainyPa$$code",
      },
    });

    const mailOptions = {
      from: "no-reply@brainylingo.co.uk",
      to: Email,
      // to: "dev23.mxpertz@gmail.com",
      subject: "Weekly Performance",
      text: `This is Your Weekly Performnce - ${message}`,
    };

    await transporter.sendMail(mailOptions);
    console.log("Weekly Performance Email sended successfully");
  } catch (error) {
    console.error("OTP Send Error:", error);
    throw error;
  }
};