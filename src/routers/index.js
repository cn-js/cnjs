const users = require('./users');

const router = require('koa-router')({
  prefix: '/api/v1',
});

router
  .use(users);

module.exports = router;
