const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
console.log('env', dev);
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    // TODO set up file for routing
    server.get('/search', (req, res) => {
      return app.render(
        req,
        res,
        '/search',
        {
          start: req.query.start, end: req.query.end
        }
      );
    });

    server.get('/api/test', (req, res) => {
      res.json(
        {
          success: true
        }
      );
    });

    // Next.js default handling
    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });