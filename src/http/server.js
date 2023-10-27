/*
 * @Author: wy
 * @Date: 2023-10-27 11:29:38
 * @LastEditors: wy
 * @LastEditTime: 2023-10-27 11:35:23
 * @FilePath: /笔记/node/src/http/server.js
 * @Description:
 */
const http = require('http');

const server = http.createServer((req, res) => {
  console.log('===1', '请求到来');

  req.setEncoding('utf-8');
  req.on('data', (chunk) => {
    console.log(chunk);
  });

  req.on('end', () => {
    console.log('请求结束');
  });
  res.write('hello');
  res.end();
});

server.listen(9527);
