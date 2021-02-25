require("dotenv").config();
const fs = require("fs");
var nodemailer = require("nodemailer");

const setup = {
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
};

const emailForm = {
  from: setup.auth.user,
  to: "alcalcides@hotmail.com",
  subject: "enviando email com nodejs",
  html: loadMessage(),
};

var remetente = nodemailer.createTransport(setup);
remetente.sendMail(emailForm, (err, info) => {
  if (err) console.log("err: ", err);
  else console.log("ok: ", info.response);
});

function loadMessage() {
  const data = fs.readFileSync("./message.html", "utf8");
  console.log(data);
  return data;
}
