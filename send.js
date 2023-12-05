const { Client, LocalAuth, MessageMedia } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const fs = require("fs");

console.log("Loading image.jpeg");
const img = fs.readFileSync("./image.jpeg", { encoding: "base64" });
const client = new Client({
  puppeteer: { headless: true },
  authStrategy: new LocalAuth(),
});

console.log("Initializing...");

client.initialize();

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

// Read the file synchronously
const rawData = fs.readFileSync("phones.txt", "utf-8");

console.log("Reading phone numbers from phones.txt");
let phones = rawData.split("\n").map((line) => line.trim());

phones = phones.map((phone) => {
  return phone + "@c.us";
});

console.log("Reading message from message.txt");
const message = fs.readFileSync("message.txt", "utf-8");

client.on("ready", () => {
  console.log('Whatsapp successfully connected.');

  const media = new MessageMedia("image/jpeg", img, "image.jpeg");

  try {
    for (let index = 0; index < phones.length; index++) {
      console.log("Sending to " + phones[index]);
      client.sendMessage(phones[index], message, {
        media,
      });

      console.log("Success\n");
    }

    console.log("All messages sent successfully. Press Ctrl+C to exit...");
  } catch (error) {
    console.error("Error sending messages:", error);
    process.exit(1);
  }
});
