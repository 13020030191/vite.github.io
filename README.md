
# 正泰app官网
- 使用vite 构建

## 目录结构

|-- dist                      // 打包生成文件
|-- public                    // 静态文件
|-- src                       // 开发目录
    |-- assets                // 公共文件静态图片和请求拦截
        |-- images            // 静态图片
        |-- interceptors      // 请求拦截
    |-- components            // 组件入口
    |-- router                // 路由配置
    |-- utils                 // 公共方法
    |-- views                 // 页面
    |-- main.js               // 入口js
    |-- vite.config.js        // 工具配置
    |-- package.json          // 项目配置
    |-- README.md             // 项目说明
    |-- .env.*                // 环境区分
  
## 项目开发

```bash
# 安装依赖
yarn or npm install

# 启动代码
yarn dev or npm run dev

# 打包代码
yarn build:production or npm run build:production

```


