const { Sequelize } = require("sequelize");
const fs = require("fs");
require('dotenv').config();

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env', override: true });

// Function to convert text to boolean
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// Function to convert string to boolean
const toBool = (x) => (x && x.toLowerCase() === 'true') || false;
global.apiUrl = 'https://api.maskser.me/'

// Define the Sequelize instance based on DATABASE_URL
const DATABASE_URL = process.env.DATABASE_URL === undefined ? './database.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);
// Export configuration variables
module.exports = {
  HANDLERS: (process.env.PREFIX || '.').trim(),
  BRANCH: "main",
  MODE: (process.env.MODE || 'private').toLowerCase(),
  ERROR_MSG: toBool(process.env.ERROR_MSG) || true,
  LOG_MSG: toBool(process.env.LOG_MSG) || true,
  READ_CMD: toBool(process.env.READ_CMD),
  SESSION_ID: process.env.SESSION_ID || "",
  MENU_URL: process.env.MENU_URL || "https://i.imgur.com/ZxbCSmN.jpeg",
  CAPTION: process.env.CAPTION || "KARLA",
  READ_MSG: toBool(process.env.READ_MSG),
  OWNER_NAME: process.env.OWNER_NAME || "IGWE",
  BOT_NAME: process.env.BOT_NAME || "KARLA-MD",
  SUDO: process.env.SUDO || null,
  LANG: process.env.LANGUAGE === undefined ? 'EN' : process.env.LANGUAGE.toUpperCase(),
  STICKER_PACKNAME: process.env.STICKER_PACKNAME || "love_KARLA-MD,❤️",
  AUDIO_DATA: process.env.AUDIO_DATA || "IGWE;KARLA-MD;https://i.imgur.com/ZxbCSmN.jpeg",
  PROCESSNAME: process.env.PROCESSNAME || "KARLA-MD...",
  AUTHOR: process.env.AUTHOR ||  "IGWE TECH inc",
  DELETED_LOG_CHAT: process.env.DELETED_LOG_CHAT || false,
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "luzamiii",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-fd104824-befa-46af-84fe-207466d65e1f",
  HEROKU: toBool(process.env.HEROKU) || false,
  TERMUX: toBool(process.env.TERMUX) || false,
  DATABASE_URL: DATABASE_URL,
  DATABASE:
       DATABASE_URL === './database.db' ? new Sequelize({dialect: 'sqlite', storage: DATABASE_URL, logging: false,}) : new Sequelize(DATABASE_URL, {dialect: 'postgres', ssl: true, protocol: 'postgres', dialectOptions: {native: true, ssl: { require: true, rejectUnauthorized: false },}, logging: false,}),
  DEBUG: DEBUG
};
