const router = require('koa-router')({prefix: '/sys'})
const sendMail = require('../controller/sendMail.js')

// 发送邮件提醒
router.post('/sendMail', sendMail.send)

module.exports = router