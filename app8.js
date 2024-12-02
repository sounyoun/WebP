const express = require('express'); // express 요청

const app = express(); // 웹 객체 만들기

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const path = require('path');
const static = require('serve-static');
app.use('/', static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
    const paramId = req.body.id || req.query.id;
    const paramPassword = req.body.password || req.query.password;

    res.status(200).send(
        '<h1>서버에서 응답한 결과</h1><div><p>Param id : ${paramId}</p></div><div><p>Param password : ${paramPassword}</p></div><br><br><a href="/login1.html">로그인 페이지로 돌아가기</a>'
    );
});

app.listen(300);
