const fastify = require('fastify');
const app = fastify({
    logger: true,
    disableRequestLogging: true
});

app.register(require('@fastify/helmet'), {
    contentSecurityPolicy: false,
});

app.register(require('@fastify/rate-limit'), {
    max: 100,
    timeWindow: '1 minute',
});

app.register(require('@fastify/multipart'));

module.exports = app;
