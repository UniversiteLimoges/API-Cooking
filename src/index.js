// Connection to mongoDB
require('./database/connection.js');
// Middlewares
const ingredientsMiddleware = require('./middleware/ingredients.js');
const recipesMiddleware = require('./middleware/recipes.js');

// Server
const app = require('./app');
const port = 3030;
const host = "localhost";

// Moar
const logger = require('./logger');
// const bodyParser = require('body-parser').json();

process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
);

// Start the server
app.listen(port)
  .on('listening', () =>
    logger.info('Feathers application started on http://%s:%d', host , port)
  );

/* Routes */
// Home
app.get('/', function (req, res) { 
  res.send('Bienvenue sur mon API de recettes !')
})

// Middleware
app.use('/ingredients', ingredientsMiddleware);
app.use('/recipes', recipesMiddleware);

// So our API doesn't look so empty
app.service('messages').create({
  text: 'Hello world from the server'
});