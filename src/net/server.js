/*
 * @Author: wy
 * @Date: 2023-10-26 21:53:49
 * @LastEditors: wy
 * @LastEditTime: 2023-10-26 22:31:15
 * @FilePath: /笔记/node/src/net/server.js
 * @Description:
 */
// 建立一个服务器，监听9527端口
const path = require('path');
const fs = require('fs');
const net = require('net');
const server = net.createServer();

server.listen(9527);

server.on('listening', () => {
  console.log('server start on 9527');
});

server.on('connection', (socket) => {
  // n个连接对应n个socket, n个浏览器窗口，对应n个socket
  console.log('有客户端连接服务器');
  socket.on('data', async (chunk) => {
    const filename = path.resolve(__dirname, '../files/2.jpeg');
    const bodyBuffer = await fs.promises.readFile(filename);
    const str = `HTTP/1.1 200 OK
Content-Type: image/jpeg
Content-Length: 4662

`;
    const headersBuffer = Buffer.from(str, 'utf-8');
    const response = Buffer.concat([headersBuffer, bodyBuffer]);
    socket.write(response);
    socket.end();
  });

  socket.on('end', () => {
    console.log('连接关闭');
  });
});

// 有连接建立出发
// server.on('connection', (socket) => {
//   // n个连接对应n个socket, n个浏览器窗口，对应n个socket
//   console.log('有客户端连接服务器');
//   socket.on('data', (chunk) => {
//     console.log('chunk', chunk.toString('utf-8'));
//     socket.write(`HTTP/1.1 200 OK

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Document</title>
// </head>
// <body>
//   <h1>123444</h1>
// </body>
// </html>
// `);
//   });
// });
