## 用到的技术

- curl命令

``` javascript
curl  https://5c66bbb324e2140014f9edd2.mockapi.io/api/v1/records
```

- json-server

```javascript
json-server --watch db.json  --port 3004
```

## vscode 快捷键记录

- home 回到行首
- end 来到行尾
- shift+option+⤵️ 向下复制一行
- shift+option+⤴️ 向上复制一行
- shift+option+f 格式化代码

## nodejs 环境变量

-  "start": "REACT_APP_RECORDS_API_URL=https://5c66bbb324e2140014f9edd2.mockapi.io/api/v1/records react-scripts start  "    package.json中设置，但是这种不太方便，就用下面一种

- 在项目根目录中创建一个 .env.development.local 的文件，把 REACT_APP_RECORDS_API_URL=https://5c66bbb324e2140014f9edd2.mockapi.io/api/v1/records 放在里面即可

- 生产模式，用的文件名是 .env_production.local

- test模式 用饿文件名是 .env_test-local