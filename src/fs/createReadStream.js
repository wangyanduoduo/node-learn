/*
 * @Author: wy
 * @Date: 2023-10-26 15:56:39
 * @LastEditors: wy
 * @LastEditTime: 2023-10-26 22:09:36
 * @FilePath: /笔记/node/src/fs/createReadStream.js
 * @Description:
 */
const path = require('path');

const { createReadStream } = require('fs');

const rs = createReadStream(path.resolve(__dirname, '../files/a.txt'), {
  encoding: 'utf-8',
  highWaterMark: 1, // 一次读多少个字符 默认64kb (和encoding有关，utf-8 表示读取的字符数， 默认表示读取的字节)
});

rs.on('open', () => {
  console.log('打开');
});

rs.on('close', () => {
  console.log('关闭');
});

rs.on('data', (chunk) => {
  console.log(chunk);
  rs.pause();
});

rs.on('end', () => {
  console.log('结束');
});

rs.on('error', () => {
  console.log('出错了');
});
rs.on('pause', () => {
  console.log('暂停');
  setTimeout(() => {
    rs.resume();
  }, 1000);
});

rs.on('resume', () => {
  console.log('恢复');
});
