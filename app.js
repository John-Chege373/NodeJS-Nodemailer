const nodemailer = require('nodemailer');
const dotenv = require("dotenv");
dotenv.config();

//  transport object for Outlook
const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user : process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  }
});

// Email details
const emailOptions = {
  from: process.env.EMAIL_SENDER,
  to: process.env.EMAIL_RECEPIENT,
  subject: 'Weekly Report',
  html: '<h1>Weekly Report</h1><p>This is my weekly report.</p>',
  attachments: [
    {
      filename: 'weekly_report.docx',
      path: '/path/to/Week8Report.docx'
    }
  ]
};

// Send email
transporter.sendMail(emailOptions, (error, info) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
