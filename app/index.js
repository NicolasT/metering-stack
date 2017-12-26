const client = require('prom-client');
const express = require('express');
const morgan = require('morgan');
const onFinished = require('on-finished')
const url = require('url');

const server = express();

client.collectDefaultMetrics();

server.use(morgan('combined'));

/* This goes before other and middleware definitions, such that requests to this
 * route are not metered.
 */
server.get('/metrics', (req, res) => {
    res.set('Content-Type', client.register.contentType);
    res.end(client.register.metrics());
});


requestCounter = new client.Counter({
    name: 'http_requests_total',
    help: 'Total number of HTTP requests made.',
    labelNames: ['code', 'handler', 'method'],
});

server.use((req, res, next) => {
    onFinished(res, () => requestCounter.inc({
        'code': res.statusCode,
        'handler': url.parse(req.url).pathname,
        'method': req.method.toLowerCase(),
    }));
    next();
});


responseTimings = new client.Summary({
    name: 'http_request_duration_seconds',
    help: 'The HTTP request latencies in seconds.',
});

server.use((req, res, next) => {
    const end = responseTimings.startTimer();
    onFinished(res, end);
    next();
});


server.get('/', (req, res) => {
    res.set('Content-Type', 'application/json');
    res.end('{}');
});

console.log('Server listening to 3000, metrics exposed on /metrics endpoint');
server.listen(3000);
