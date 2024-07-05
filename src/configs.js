require('dotenv').config();

module.exports = {
    APP_NAME: process.env.APP_NAME,
    PORT: process.env.PORT || 4000,
    IPBIND: process.env.IPBIND || '127.0.0.1',
    GEMINI_SECRET: process.env.GEMINI_SECRET,
    GEMINI_MODEL: process.env.GEMINI_MODEL || 'gemini-1.5-flash'
}
