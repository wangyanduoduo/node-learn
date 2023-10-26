<!--
 * @Author: wy
 * @Date: 2023-10-25 20:49:09
 * @LastEditors: wy
 * @LastEditTime: 2023-10-26 09:48:02
 * @FilePath: /笔记/node/read.md
 * @Description:
-->

### 模块的查找规则

不管什么方式的查找，最终都会转变成绝对路径

- 绝对路径
- 相对路径
  - ./ 或者../ 相对当前文件
  - require(fs) 类似直接导入模块（不用路径的方式）
    - 先查看是不是内置模块
    - 在看 node_modules
    - 在看上级的 node_modules
- 文件后缀
  会自动补全，优先级按【js,json,node,mjs】
- 加载模块
  - 只提供目录不提供文件名，默认找目录下的 index.js
  - package.json 下的 main 是包的默认入口

### node 如何使用 es 模块

- 使用.mjs 文件 对应模块使用 es
- 在 package.json 中 添加`type: 'module'` 整个工程使用 es
- 使用 es 模块化运行的时候，必须添加 experimental-modules
  ```js
  // package.json
  "script": {
    "start": 'node --experimental-modules index.mjs'
  }
  ```
