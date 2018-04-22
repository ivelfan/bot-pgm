const http = require('http');
const path = require('path');
const fs = require('fs');
const url = require('url');

const requestHandler = (req, res) => {
  const parsedUrl = url.parse(req.url);
  let pathname = `.${parsedUrl.pathname}`;
  const { ext } = path.parse(pathname);
  const map = {
    '.ico': 'image/x-icon',
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.css': 'text/css',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.wav': 'audio/wav',
    '.mp3': 'audio/mpeg',
    '.svg': 'image/svg+xml',
    '.pdf': 'application/pdf',
    '.doc': 'application/msword',
  };

  fs.exists(pathname, (exist) => {
    if (!exist) {
      res.statusCode = 404;
      res.end(`File ${pathname} not found!`);
      return;
    }

    if (fs.statSync(pathname).isDirectory()) pathname += `/index${ext}`;

    fs.readFile(pathname, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end(`Error getting the file: ${err}.`);
      } else {
        res.setHeader('Content-type', map[ext] || 'text/plain');
        res.end(data);
      }
    });
  });
};

module.exports = { server: http.createServer(requestHandler) };
