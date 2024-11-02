//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Calabar, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Calabar";
global.github = process.env.GITHUB || "https://github.com/EMMYHENZ-TECH";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/7XTnzx9/IMG-20240927-WA0011.jpg";
global.devs = "https://t.me/EmmyHenz";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "https://t.me/EmmyHenz";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.ibb.co/7XTnzx9/IMG-20240927-WA0011.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "2349121785627,2349125042727";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUlBNHlybDZoT3lUTCt0Tm1vbUVQb2N6elp1VkJMakd4UTlNTis0SDNGMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT04wYkJZcG1XaUZhK3RMRGlQNWZJSzl0K2tJZndmQnozT2NPaEdsWStXUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPSmVxdnlmNkhPNVZNcHdyckFMWWpEaWRETTlyU25VcU1SRzdkS0RZRDFBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNZkpFY1FobzVXUEcrMmJ6ekVuQnV4Tis2UXBtQzlhTWNock5hSk1UWmlvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBQdFdLNTNYWElkN2NyeXZzWDdFdjU2VVpwYUJRdy9nWTh0TysxOENMbXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhNMGc3RUxDaElEdXluaGpkblhiL0Q4Wm1ZM2VSM1BsMHI3Y2ZOMWZFR1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUEvRHh0OWJVUXd6SEpoeUtnQ2UrWFJUSzBicjRzTGM4UG82ckNUVzdWWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidzg0U0NIb1dPc21vOFZlNEZweUxEWW5nVEpKNmpJNGZsNCtZTlRqRHRqUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndVTzI0Q2ZRd2FmRUxoRXpXdW11dEtvdzdIV01QOFNrNHRzTEt1TGhPT3ZVZFdibGtxdk5CdGNmZlpYMW9VZ3VUVWd3OXA3OG14ZlNsNVdiV2xhWkJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI5LCJhZHZTZWNyZXRLZXkiOiJrSWk2ZXFUWGtoY0pNeDhMQ25iREF2aW5DZnNHdytETVRTTldmODA3Y1c4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ5R25lRVBHcVFYLXNCaHhhamFndllnIiwicGhvbmVJZCI6ImRjNzQwNDQxLWNkMjgtNDk5Ny04N2Y1LTc5YWQxNjUwYjcyYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4YWRRNjUxNDhRY3N0YS9hc2thNGh4K3dOUlU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoick9NcWUya0VUVWQ5SmU4QnRFZFA1U1A1VmJJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlgyRFRZWkpGIiwibWUiOnsiaWQiOiIyMzQ5MDU2NzM3ODgxOjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQURFT0xBIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNORGd1cHdFRU1Qem1Ma0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJqZWtnQ0VMU3IyYWdmbVVjWXhUbGpTRCtMeWIzRmE1K0tlTGRvbnhPSzIwPSIsImFjY291bnRTaWduYXR1cmUiOiJQcjArSnBNejJ2bzMrZVRQMUtmVnE2MEZJL2l2K2tOUFUrMlNBMWhZcFhoRzllc1NZOFEzZElrL3dmTFg2RHg5aVVkalp3cUdKMnJLS3BYTG5JWktBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNDllbGRUa09aK1lwNnpBcm9yN3U1QWdFZ25MTnpCZ0MycC9mS2ZqTTlIZFZrcmd1NzJFNG9HQW5nZGJGK3h0elB1Nk00ZUYrNmt3OTV5bzdEd2NYQnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDU2NzM3ODgxOjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWTNwSUFoQzBxOW1vSDVsSEdNVTVZMGcvaThtOXhXdWZpbmkzYUo4VGl0dCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMDU1ODQxNiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOS1gifQ=="
module.exports = {
  menu: process.env.MENU || "3",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3.0.0",
  caption: process.env.CAPTION || "`EMMY_HENZ-V3™`",
  author: process.env.PACK_AUTHER || "EMMY_HENZ-V3",
  packname: process.env.PACK_NAME || "E M M Y",
  botname: process.env.BOT_NAME || "EMMY_HENZ-V3",
  ownername: process.env.OWNER_NAME || "Emmanuel Henshaw",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "E M M Y").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
