// Tymczasowa symulacja GitHub Pages: serwuje dist/ pod podścieżką /REACT_SPA_CV/
const http = require('http');
const fs = require('fs');
const path = require('path');
const DIST = path.join(__dirname, 'dist');
const BASE = '/REACT_SPA_CV';
const types = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.json': 'application/json',
};
http
  .createServer((req, res) => {
    let p = decodeURIComponent(req.url.split('?')[0]);
    let rel = p.startsWith(BASE) ? p.slice(BASE.length) : p;
    if (rel === '' ) rel = '/';
    const filePath = path.join(DIST, rel);
    if (!filePath.startsWith(DIST)) {
      res.writeHead(403);
      res.end('forbidden');
      return;
    }
    fs.readFile(filePath, (err, data) => {
      if (err) {
        // SPA fallback -> index.html
        fs.readFile(path.join(DIST, 'index.html'), (e2, d2) => {
          if (e2) {
            res.writeHead(404);
            res.end('not found');
            return;
          }
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(d2);
        });
        return;
      }
      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, { 'Content-Type': types[ext] || 'application/octet-stream' });
      res.end(data);
    });
  })
  .listen(4173, () => console.log('GitHub-Pages-like server at http://localhost:4173' + BASE + '/'));
