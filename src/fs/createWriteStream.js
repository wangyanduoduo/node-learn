/*
 * @Author: wy
 * @Date: 2023-10-26 16:30:23
 * @LastEditors: wy
 * @LastEditTime: 2023-10-26 22:09:31
 * @FilePath: /笔记/node/src/fs/createWriteStream.js
 * @Description:
 */
const path = require('path');

const { createWriteStream } = require('fs');

const targetUrl = path.resolve(__dirname, '../files/w.txt');

const ws = createWriteStream(targetUrl);

let i = 0;

const write = () => {
  let flag = true;
  while (i < 1024 * 1024 * 1 && flag) {
    i++;
    flag = ws.write('a');
  }
};
write();
ws.on('drain', () => {
  write();
});

ws.on('end', () => {
  console.log('结束');
});
