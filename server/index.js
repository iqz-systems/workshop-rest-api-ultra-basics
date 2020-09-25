const http = require('http');

const users = [];
const requestListener = function (req, res) {
    if (req.url === '/') {
        if (req.method === 'GET') {
            let userList = '';
            userList += '<ul>';
            for (let u of users) {
                userList = userList + '<li><strong>Name:</strong> ' + u.name + '</li>';
            }
            userList += '</ul>';
            const html = '<html><body><div>User count: ' + users.length + '</div><div>' + userList + '</div></body></html>'
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(html);
        }
    }
    if (req.url === '/api/users') {
        if (req.method === 'GET') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(users));
        }
        if (req.method === 'POST') {
            var body = '';

            req.on('data', function (data) {
                body += data;
            });
            req.on('end', function () {
                var user = JSON.parse(body);
                users.push(user);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ status: 'ok', user: user }));
            });
        }
    }
}

const server = http.createServer(requestListener);
server.listen(3000);