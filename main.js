const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
// 解析request的body的功能(post请求)
const bodyParser = require('koa-bodyparser');

app
	.use(bodyParser())
	.use(require('./router/index.js').routes())
	.use(router.allowedMethods());

app.listen(8085, (res) => {
	console.log('服务启动成功--------http://12.0.0.1:8085');
});