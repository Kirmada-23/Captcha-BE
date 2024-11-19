const { getCurrentCaptcha } = require("./captcha");

let userBalance = 0;

export default function handler(req, res) {
  if (req.method === "POST") {
    const { userInput } = req.body;
    if (userInput === getCurrentCaptcha()) {
      userBalance += 1;
      res.status(200).json({ valid: true, newBalance: userBalance });
    } else {
      res.status(200).json({ valid: false });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
