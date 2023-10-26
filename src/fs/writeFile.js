/*
 * @Author: wy
 * @Date: 2023-10-26 11:04:39
 * @LastEditors: wy
 * @LastEditTime: 2023-10-26 22:09:56
 * @FilePath: /笔记/node/src/fs/writeFile.js
 * @Description:
 */
const path = require('path');
const { writeFile, readFile } = require('fs/promises');

const copy = async () => {
  // 获取原图
  const url = path.resolve(__dirname, '../files/1.png');
  const imageData = await readFile(url);
  const targetUrl = path.resolve(__dirname, '../files/1_copy.png');
  await writeFile(targetUrl, imageData);
};

copy();
