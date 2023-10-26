/*
 * @Author: wy
 * @Date: 2023-10-26 21:36:07
 * @LastEditors: wy
 * @LastEditTime: 2023-10-26 21:41:15
 * @FilePath: /笔记/node/src/net/index.js
 * @Description:
 */
const net = require('net');
const socket = net.createConnection({ host: 'www.baidu.com', port: 80 }, () => {
  // 'connect' listener.
  console.log('连接建立');
});
// 发送请求
socket.write(`GET / HTTP/1.1
Host: www.baidu.com
Connection: keep-alive


`);
socket.on('data', (chunk) => {
  console.log('chiunk', chunk.toString('utf-8'));
});
