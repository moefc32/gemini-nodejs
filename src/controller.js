const { APP_NAME, GEMINI_SECRET, GEMINI_MODEL } = require('./configs');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const genAI = new GoogleGenerativeAI(GEMINI_SECRET);
const model = genAI.getGenerativeModel({ model: GEMINI_MODEL });

module.exports = {
    root: async (req, res) => {
        const { prompt = 'Hello Gemini!' } = req.body || {};
        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();

        return await res.status(200).send({
            app_name: APP_NAME,
            message: text,
        });
    },
    healthCheck: async (req, res) => {
        return await res.status(200).send({
            application: APP_NAME,
            message: 'Application is healthy.',
        });
    },
    notFound: async (req, res) => {
        return await res.status(404).send({
            application: APP_NAME,
            message: 'Requested route is not found!',
        });
    },
}
