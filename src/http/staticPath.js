/*
 * @Author: wy
 * @Date: 2023-10-27 13:23:07
 * @LastEditors: wy
 * @LastEditTime: 2023-10-27 14:13:30
 * @FilePath: /笔记/node/src/http/staticPath.js
 * @Description:
 */
// 配置静态文件目录
const path = require('path');
const fs = require('fs');
const http = require('http');

async function fileStat(url) {
  try {
    return await fs.promises.stat(url);
  } catch (err) {
    return null;
  }
}

async function getFileContent(objUrl) {
  let pathName = path.resolve(
    __dirname,
    'public',
    objUrl.pathname.substring(1)
  );
  let stat = await fileStat(pathName);

  if (stat) {
    if (stat.isDirectory()) {
      // 目录
      pathName = pathName + '/index.html';
      stat = await fileStat(pathName);
      if (stat) {
        return fs.promises.readFile(pathName);
      } else {
        return null;
      }
    } else {
      // 文件
      return fs.promises.readFile(pathName);
    }
  } else {
    return null;
  }
}

async function serverHandler(req, res) {
  const reqUrl = req.url;
  const objUrl = new URL(reqUrl, `http://${req.headers.host}`);
  const info = await getFileContent(objUrl);
  console.log('====info', info);
  if (info) {
    res.write(info);
  } else {
    res.write('not found');
  }
  res.end();
}

const server = http.createServer(serverHandler);

server.listen(9527);

server.on('listening', () => {
  console.log('server start 9527');
});
