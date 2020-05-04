## 카카오 챗봇 스킬 서버 만들기 (nodejs + expressjs)
#### 환경 만들기(터미널 명령어)
  * `nvm install —lts` (node version manager 설치. lts = long term support )
  * `mkdir skill-server-example`
  * `npm init` (폴더 안에 nodejs 패키지 설치)
  * `npm i -save express` (package.json에 dependeny 추가. expressjs : 웹 프레임워크)
  * `npm i —save morgan body-parser` (morgan : 로깅 담당 & body-parser : 요청의 body 추출)
#### index.js에 기본적인 express 설정하기
```javascript
const express = require('express');
const app = express(); // api 서버 인스턴스
const logger = require('morgan');
const bodyParser = require('body-parser');

const apiRouter = express.Router();

app.use(logger('dev', {}));
app.use(bodyParser.json());
app.use('/api', apiRouter); // api/** 로 시작하는 모든 요청은 apiRouter에게 전달
```
#### api 서버에 두 개의 엔드포인트 추가 -  ‘/api/recipe’, ‘/api/dishImage
```javascript
apiRouter.post('/recipe', function(req, res) {
  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleText: {
            text: "Shashlik recipe"
          }
        }
      ]
    }
  };

  res.status(200).send(responseBody); // 200 : OK. 요청이 성공했음을 의미
});

apiRouter.post('/dishImage', function(req, res) {
  console.log(req.body);

  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleImage: {
            imageUrl: "https://t1.daumcdn.net/friends/prod/category/M001_friends_ryan2.jpg",
            altText: "dish image"
          }
        }
      ]
    }
  };

  res.status(200).send(responseBody);
});
```
#### express app을 특정 포트로 실행하도록 listen method 추가
```javascript
app.listen(3000, function() {
  console.log('Example skill server listening on port 3000!');
});
```
#### 터미널에서 node 명령어를 통해 스킬 서버 실행
  * `node index.js`

#### 터미널에서 curl 명령어를 통해 서버에 요청 보내기
  * `curl http://localhost:3000/api/recipe`

#### 실제 서비스에선 curl을 통해서 보내던 요청을 카카오 봇 시스템이 수행. 그리고 실행 결과를 토대로 출력 모양을 결정
