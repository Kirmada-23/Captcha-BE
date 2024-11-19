const svgCaptcha = require("svg-captcha");

let currentCaptcha = "";

export default function handler(req, res) {
  const captcha = svgCaptcha.create();
  currentCaptcha = captcha.text;
  res.status(200).json({ captcha: captcha.data });
}

module.exports.getCurrentCaptcha = () => currentCaptcha;
