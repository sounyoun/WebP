// use , next 써보기

const express = require('express'); // express 요청
const app = express(); // 웹 객체 만들기

// 이 함수 쓰겠다
app.use(function(req, res, next) {
    console.log("First Middleware ...");
    req.user = 'YSU';
    next();
});

app.use(function(req, res, next) {
    console.log("Second Middleware ...");
    res.status(200).send(`<h1>${req.user} responds at Express Server</h1>`)
    next();
});

app.listen(500);