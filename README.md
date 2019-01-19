<h2>第3章 Koa2基础知识</h2>
<h3>安装koa-generator:npm install -g koa-generator</h3>
<h3>初始化项目:koa2 -e koa</h3>
<p>-e是指定ejs模板，默认jade模板，koa为项目名称</p>
<p>进入到koa目录，npm install & npm start (开发模式:npm run dev)启动项目；访问项目localhost:3000</p>

<h2>第4章 Mongoose和Redis基础</h2>
<h3>4-1 mongoose（1）</h3>
<p>1.安装mongoose npm i mongoose</p>
<h2>4-3 Redis（1）</h2>
<h3>1.安装Redis </h3>
<h3>2.启动：在安装目录下找到redis-server.exe,点击启动</h3>
<h3>3.安装中间件:npm i koa-generic-session koa-redis</h3>
<h3>4.查看存储的key值：在安装目录下点击redis-cli，输入keys* ,显示key值，key值前缀为设置的mtpr</h3>

<h2>第5章 Nuxt.js基础知识</h2>
<h3>tips:使用Nuxt.js with Koa</h3>
<h3>初始化：vue init nuxt-community/koa-template project-name</h3>
<h3>tips:使用Nuxt.js with Koa</h3>
<h3>tips:npm run dev 会报错；解决方案:npm uninstall nuxt ;npm install nuxt@1.4.2</h3>

<h2>6-2 辅助工具安装与配置改装</h2>
<h3>tips:在server/index中，将const Koa = require('koa')改为import koa from 'koa'会报错，是因为import为es6语法，node默认不支持es6语法，需要使用babel进行处理</h3>
<p>1.安装babel:npm i babel-core babel-preset-es2015 babel-cli</p>
<p>2.配置.babelrc</p>
<p>3.修改package.json，在dev和build命令后加--exec babel-node</p>

<h2>第8章 第8章 开发美团网首页-登录注册</h2>
<h3>8-2</h3>
<p>1.安装mongoose ：npm i mongoose</p>
<p>2.安装koa-router ：npm i koa-router</p>
<p>3.安装koa-redis ：npm i koa-redis</p>
<p>4.安装安装nodemailer ：npm i nodemailer</p>
<h3>8-3</h3>
<p>安装axios：npm i axios</p>
<p>安装koa-passport：npm i koa-passport</p>
<p>安装passport-local：npm i passport-local</p>
