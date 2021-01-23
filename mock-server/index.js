const Mock = require('mockjs');
const http = require('http');
const path = require('path');
const routes = require('./routes');
http.createServer((req, res) => {
  console.log(req.url, req.method);
  for (const route of routes) {
    const metas = route.meta.split('|');
    const method = metas[0];
    const url = metas[2];
    if (method === req.method && url === req.url) {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json;charset=UTF-8');
      res.end(JSON.stringify(Mock.mock(route.data)));
      return;
    }
  }
  res.statusCode = 404;
  res.end();
}).listen(4300);
