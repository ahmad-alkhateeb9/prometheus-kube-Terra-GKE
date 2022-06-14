const express = require('express');
const app = express()

const client = require('prom-client');
const collectDefaultMetrics = client.collectDefaultMetrics;

collectDefaultMetrics({ timeout: 5000 });

// const httpRequestsTotal = new client.Counter({
//     name: 'http_request_operations_total',
//     help: 'Total number of Http requests',
//     });

//     const httpRequestDurationSeconds = new client.Histogram({
//         name: 'http_request_duration_seconds',
//         help: 'duration of request in seconds',
//         buckets: [0.1, 0.5, 2, 5, 10] // don't automatically register this metric
//       });


app.get('/',(req,res) => res.send('hello world my edit with promutheus '));


app.get("/metrics",async(req,res)=>{

    res.set('Content-Type', client.register.contentType);
    res.end(await client.register.metrics());

});

app.listen(3000,() => {
    console.log('My app is running');
})