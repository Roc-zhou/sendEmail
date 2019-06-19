const nodemailer = require("nodemailer");

exports.send = async (ctx, next) => {
	const sendInfo = ctx.request.body
	const transporter = nodemailer.createTransport({ // 创建邮件
		host: 'smtp.126.com',
		secureConnection: true, // use SSL
		port: 465, //SMTP 端口
		secure: true, // secure:true for port 465, secure:false for port 587
		auth: {
			user: 'roc_zhou991@126.com',
			pass: 'asd', // 邮箱需要使用授权码
		},
	})

	const mailOptions = {
		from: '"zhouhaipeng" <roc_zhou991@126.com>', // 发件人
		to: '1137938565@qq.com', // 收件人
		cc: '', //抄送
		// bcc      : ''    //密送
		subject: `${sendInfo.user_name} 往 ${ctx.query.from} 项目提交了Git更新 请注意查看更新`, // 主题
		text: '提醒邮件', // plain text body
		html: `<h3>本次提交内容：</h3><p>${sendInfo.commits[0].message}</p>`, // html body
	}

	transporter.sendMail(mailOptions, (error, info) => { // 使用先前创建的传输器的 sendMail 方法传递消息对象
		if (error) console.log({
			error: error,
		})
		else console.log(info);
	})
	ctx.response.body = 'success'
}