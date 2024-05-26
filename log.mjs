import http from 'http';
import fs from 'fs';
import { URL } from 'url';

const server = http.createServer((req, res) => {
    const { method, url } = req;
    const parsedUrl = new URL(url, http://${req.headers.host});

    if (method === 'GET' && parsedUrl.pathname === '/') {
        fs.readFile('./index.html', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end('<h1>Server Error</h1>');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>Page Not Found</h1>');
    }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(Server is running on port ${PORT});
});