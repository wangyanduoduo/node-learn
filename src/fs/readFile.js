/*
 * @Author: wy
 * @Date: 2023-10-26 10:46:24
 * @LastEditors: wy
 * @LastEditTime: 2023-10-26 11:05:24
 * @FilePath: /笔记/node/src/fs/readFile.js
 * @Description:
 */
const path = require('path');

const { readFile } = require('fs/promises');

const getFileContent = async () => {
  try {
    const fileUrl = path.resolve(__dirname, './files/content.json');
    const res = await readFile(fileUrl, 'utf-8');

    console.log('===res', res);
  } catch (e) {
    console.log(e);
  }
};

getFileContent();
