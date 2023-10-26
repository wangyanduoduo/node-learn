/*
 * @Author: wy
 * @Date: 2023-10-26 13:20:37
 * @LastEditors: wy
 * @LastEditTime: 2023-10-26 22:09:44
 * @FilePath: /笔记/node/src/fs/readDir.js
 * @Description:
 */
/**
 * 读取目录下的所有文件
 */

const path = require('path');
const { readFile, stat, readdir } = require('fs/promises');

class File {
  constructor(fileName, name, ext, isFile, size, createTime, updateTime) {
    this.fileName = fileName;
    this.name = name;
    this.ext = ext;
    this.isFile = isFile;
    this.size = size;
    this.createTime = createTime;
    this.updateTime = updateTime;
  }
  // 获取文件信息
  async getContent(isBuffer = false) {
    if (this.isFile) {
      if (isBuffer) {
        return await readFile(this.fileName);
      } else {
        return await readFile(this.fileName, 'utf-8');
      }
    }
    return null;
  }
  async getChildren() {
    if (this.isFile) {
      return [];
    }
    let children = await readdir(this.fileName);
    children = children.map(async (name) => {
      const url = path.resolve(this.fileName, name);
      return await File.getFile(url);
    });
    return Promise.all(children);
  }
  static async getFile(fileName) {
    const info = await stat(fileName);
    const name = path.basename(fileName);
    const ext = path.extname(fileName);
    const isFile = !info.isDirectory(fileName);
    const size = info.size;
    const createTime = info.birthtime;
    const updateTime = info.mtime;

    return new File(fileName, name, ext, isFile, size, createTime, updateTime);
  }
}

async function test() {
  const url = path.resolve(__dirname, '../files');
  const res = await File.getFile(url);
  console.log(await res.getContent());
}

test();

// fileName（文件路径）, name（文件名）, ext(文件后缀)，isFile, size, createTime, updateTime
