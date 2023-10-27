/*
 * @Author: wy
 * @Date: 2023-10-27 11:09:25
 * @LastEditors: wy
 * @LastEditTime: 2023-10-27 11:16:42
 * @FilePath: /笔记/node/src/http/request.js
 * @Description:
 */
const http = require('http');
const request = http.request(
  {
    hostname: 'www.baidu.com',
    method: 'GET',
  },
  (resp) => {
    resp.setEncoding('utf8');
    resp.on('data', (chunk) => {
      console.log(`BODY: ${chunk}`);
    });

    resp.on('end', () => {
      console.log('请求完毕');
    });
  }
);

request.end();
