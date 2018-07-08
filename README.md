# CNJS
## CNJS是基于Node.js+MongoDB打造的中文JavaScript社区系统  
采用开源的nodeclub作为v1版本的后端。  
同时我们也修改了部分代码以提高用户体验。  
特别感谢nodeclub
## 运行
### 详细说明请参考[部署文档](https://github.com/cn-js/documents/blob/master/%E5%AE%89%E8%A3%85%E9%83%A8%E7%BD%B2%E8%AF%B4%E6%98%8E/README.md)
Step 0
```
请确保MongoDB已启动并监听本地27017端口。
同时创建一个名为node_club_dev的数据库。
```
Step 1
```
npm install
```

Step 2
```
npm start
// 后端服务会监听3000端口，请保证3000端口未被占用以及能访问
```
