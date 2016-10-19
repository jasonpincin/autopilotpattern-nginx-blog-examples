const http = require('http');

const server = http.createServer(onRequest);
server.listen(process.env.PORT || 5000);

function onRequest (req, res) {
    res.end('About Me\nComing soon!\n');
}
