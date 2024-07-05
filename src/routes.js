const route = require('./fastify');
const c = require('./controller');

// Routes start here

route.get('/', c.healthCheck);
route.post('/', c.root);

route.setNotFoundHandler(c.notFound);

// End of routes

module.exports = route;
