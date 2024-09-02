const express = require('express');
const fs = require('fs');
const app = express();
const port = 4000;

app.get('/capturadetela/2024-09-02-04-10.png', (req, res) => {
    handle(req, res);
});
app.get('/', (req, res) => {
    handle(req, res);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

function handle(req, res) {
    const requestInfo = {
        ip: req.ip,
        ips: req.ips,
        method: req.method,
        url: req.url,
        headers: req.headers,
        query: req.query,
        body: req.body,
        timestamp: new Date().toISOString()
    };
    
    const logEntry = JSON.stringify(requestInfo, null, 2) + '\n\n';
    console.log(logEntry);

    fs.appendFile(`${new Date().toISOString()}.json`, logEntry, (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
        }
    });

    res.send();
}
